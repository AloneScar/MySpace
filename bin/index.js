#! /usr/bin/env node
const program = require('commander');
const {Command} = require('commander');
const chalk = require('chalk');


program // 创建模板文件
    .command('create <projectName> [otherNames...]')
    .option('-f, --frontweb', 'create front-web files')
    .option('-C, --cpplus', 'create c plus plus files')
    .option('-p --python', 'create python files')
    .option('-c --cfiles', 'create c files')
    .action(function (projectName, otherNames, cmd) {
        names = []
        //console.log(projectName);
        names.push(projectName)
        if (otherNames) {
            names = names.concat(otherNames);
        }
        //console.log(names)
        //console.log(cmd)
        var options = [cmd.frontweb ? true : false, cmd.cpplus ? true : false, cmd.python ? true : false, cmd.cfiles ? true : false];
        var options_name = ['frontweb', 'cpplus', 'python', 'cfiles'];
        var temp = []
        for (var i = 0;i < options.length;i++) {
            if (options[i] === true) {
                temp.push('true');
            }
        }
        if (temp.length > 1) {
            console.log(chalk.red('Error:') + chalk.blue('Please Write an option'));
        }
        else {
            file_name = options_name[options.indexOf(true)];
            require('../lib/command/create.js')(names, file_name);
        }
        
    })

/*program // 查看my当前版本*/
    //.version('0.0.1', '-v, --version')
    /*.option('-s --settings', 'settings')*/

	

program.parse(process.argv);

