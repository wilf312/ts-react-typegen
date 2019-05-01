/**
 * Module dependencies.
 */
const program = require('commander')
const {main} = require('./')

program
  .version('1.0.0', '-v, --version')

program.command('generate <componentDir> <outputPath>')
  .alias('g <componentDir> <outputPath>')
  .description('typescript react generate')
  .action((componentDir: any, outputPath: any) => {
    if (componentDir && componentDir.trim() && outputPath && outputPath.trim()) {
      main(componentDir, outputPath)
    }
  })

program.parse(process.argv)
