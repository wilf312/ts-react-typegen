import * as path from 'path'
import * as glob from 'glob'

export const getComponentPathList = (target: string): string[] => {
  // console.log('getComponentPathList')
  const p = path.resolve(process.cwd(), target)
  const fileList = glob.sync(p)
  .filter(function (module) { // TODO: (wilf312) ここ要る…？
    // console.log(module)
    // console.log(!/\/*.node_modules*./.test(module))
    return !/\/*.node_modules*./.test(module)
  })
  // console.log(p)
  // console.log(fileList)
  
  return fileList
}