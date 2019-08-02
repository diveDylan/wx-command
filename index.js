#!/usr/bin/env node
var wxCommander = require('commander')

// http://nodejs.cn/api/process.html#process_process_cwd  learn something about process
wxCommander
  .version('1.0.0', '-v, --version')
  .usage('wxs-command')
  .description('a wx-commander for create components or page files')
 

// test command
wxCommander
  .command('log', 'a log')
  .action(function() {
    console.log(`惊不惊喜，刺不刺激`)
  })
  .parse(process.argv)




