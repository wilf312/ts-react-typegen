import * as fs from 'fs'
import {parse} from 'react-docgen-typescript'
import {getComponentPathList} from './lib'

const parser = parse

export const main = (target = 'src/**/*.tsx', outputPath = './type.json') => {

  console.log('target %s', target)
  console.log('outputPath %s', outputPath)

  // component を取得
  const componentPathList = getComponentPathList(target)
  // console.log(componentPathList)

  // parseを適応 
  const typeList = componentPathList.map(filePath => {
    let parsed = parser(filePath) // programProviderは内部で生成するので渡さない
    // console.log(filePath)
    // console.log(parsed[0].props)
    parsed.filePath = filePath
    return parsed
  })

  // console.log(typeList)
  fs.writeFileSync(outputPath, JSON.stringify(typeList, undefined, 2))

  console.log(`✨ Generated! ${outputPath}`)
}
