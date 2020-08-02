#! /usr/bin/env node
const program = require('commander');

program // 创建模板文件
    .command('create <projectName>')
    .option('-f, --frontweb', 'create front-web files')
    .option('-C, --cpplus', 'create c plus plus files')
    .option('-p --python', 'create python files')
    .option('-c --cfiles', 'create c files')
    .action(function (projectName, cmd) {
        var options = [cmd.frontweb, cmd.cpplus, cmd.python, cmd.cfiles];
        var options_n = ['frontweb', 'cpplus', 'python', 'cfiles'];
        var temp = [];
        var file_n;
        for (var i = 0;i < options.length;i++) {
            if (options[i] === true) {
                temp.push('true');
            }
        }
        if (temp.length > 1) {
            console.log('Error:Please Write an option');
        }
        else {
            file_n = options_n[options.indexOf(true)];
            require('../lib/command/create.js')(projectName, file_n);
        
        }
        
    });

program // 查看my当前版本
    .version('0.0.1', '-v, --version')
    .option('-s --settings', 'settings')

	

program.parse(process.argv);

