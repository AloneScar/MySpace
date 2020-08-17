const path = require("path");
const fs = require("fs-extra");
const { option } = require("commander");

module.exports = function(projectName, file) {
    for (var i = 0;i < projectName.length;i++) {
    // 1.获取需要创建工程的目录的路径
        const targetDir = path.resolve(process.cwd() , projectName[i]);
        console.log(targetDir)
        // 2.找到需要复制的模板文件路径
        const templateDir = path.resolve(__dirname, "../../template/create/"+file);
        // 3.将目录路径下的文件全部都复制到工程目录下去
        // 如果目录存在,则提示用户
        if(fs.existsSync(targetDir)) {
            console.log(`<${projectName}>目录已经存在,请输入一个新的项目名称或删除旧目录`);
            continue;
        } else {
            try {
                // 创建文件夹
                fs.mkdirSync(targetDir);
                // 复制模板文件到项目目录下
                fs.copySync(templateDir, path.resolve(targetDir));
                date = new Date();
                now = (date.getFullYear()).toString() + '-' +(date.getMonth() + 1).toString() + '-' + (date.getDate()).toString();
                var write_url;
                options = {
                    frontweb : '/index.html',
                    cpplus : '/main.cpp',
                    python : '/main.py',
                    cfiles : '/main.c'
                };
                if (file === 'frontweb') {
                    write_url = targetDir+options.frontweb;
                    var data = fs.readFileSync(write_url);   
                } else if (file === 'cfiles') {
                    write_url = targetDir+options.cfiles;
                    var data = fs.readFileSync(write_url);  
                } else if (file === 'cpplus') {
                    write_url = targetDir+options.cpplus;
                    var data = fs.readFileSync(write_url);
                } else {
                    write_url = targetDir+options.python
                    var data = fs.readFileSync(write_url);   
                }
                data = data.toString();
                data = data.replace('|||', now);
                fs.writeFileSync(write_url, data);
                console.log('项目创建成功');
            } catch(e) {
                console.log(e);
            }
        }
    }
}
