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
          var data = new Uint8Array(Buffer.from(files(process.cwd()).page[i]))
          fs.writeFileSync(`index.${i}`, data)
        })
      } catch(err) {
        console.error('what fuck: copy failed')
      }
    }
    if (params === 'component') {
      try {
        fileTypes.map(async(i) => {
          var data = new Uint8Array(Buffer.from(files(process.cwd()).page[i]))
          fs.writeFileSync(`index.${i}`, data)})
      } catch(err) {
        console.error('what fuck: copy failed')
      }
    }
  })
  .parse(process.argv)


