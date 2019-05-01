import * as fs from 'fs'
import {parse, ComponentDoc} from 'react-docgen-typescript'
import {getComponentPathList} from './lib'

const parser = parse

export const main = (target = 'src/', outputPath = './type.json') => {

  console.log('target %s', target)
  console.log('outputPath %s', outputPath)

  // component を取得
  const componentPathList = getComponentPathList(target)
  // console.log(componentPathList)

  // parseを適応 
  interface IType extends ComponentDoc {
    filePath: string
  }
  const typeList = parser(componentPathList).map((type: ComponentDoc, index: number) => {
    let parsed: IType = {
      displayName: type.displayName || '',
      description: type.description || '',
      props: type.props || {},
      methods: type.methods || [],
      filePath: componentPathList[index]
    }
    // console.log(parsed)
    return parsed
  })

  // console.log(typeList)
  fs.writeFileSync(outputPath, JSON.stringify(typeList, undefined, 2))

  console.log(`✨ Generated! ${outputPath}`)
}
