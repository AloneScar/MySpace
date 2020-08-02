var program = require('commander');
 
program
  .command('rm <dir>')
  .option('-r, --recursive', 'Remove recursively')
  .option('-f, --front', 'frontweb')
  .action(function (dir, cmd) {
    console.log(cmd)
    console.log(cmd.recursive)
    console.log(cmd.front)
    console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
  })
 
program.parse(process.argv)
