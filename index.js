#!/usr/bin/env node
var wxCommander = require('commander')
var fs = require('fs')
var path = require('path')
var files = require('./files')


// http://nodejs.cn/api/process.html#process_process_cwd  learn something about process
// wxCommander
//   .version('1.0.0', '-v, --version')
//   .usage('wxs-command')
//   .description('a wx-commander for create components or page files')

var fileTypes = ['js', 'wxss', 'wxml', 'json']
wxCommander
  .command('create <type>', 'create page or component files')
  .action(function (name, params) {
    if (params === 'page') {
      try {
        fileTypes.map(async(i) => {
          console.log(i)
          var data = new Uint8Array(Buffer.from(files(process.cwd()).page[i]))
          fs.writeFileSync(`page.${i}`, data)
        })
      } catch(err) {
        console.error('what fuck: copy failed')
      }
    } else {
      try {
        fileTypes.map(async(i) => { await fs.copyFileSync(`./files/component/index${i}`, `component${i}`) })
      } catch(err) {
        console.error('what fuck: copy failed')
      }
    }
  })
  .parse(process.argv)


