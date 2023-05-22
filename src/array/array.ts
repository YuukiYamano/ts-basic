export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  console.log('Array array sample 1:', colors)

  const ids: (string | number | boolean)[] = ['ABC', 124]
  ids.push('DEF')
  ids.push(456)
  ids.push(true)
  console.log('Array array sample 2:', ids)

  const generateSomeArray = () => {
    const _someArray = [] //any
    _someArray.push(123)

    _someArray.push('ABCaaaaaaa1')

    return _someArray
  }
  const someArray = generateSomeArray()

  console.log('Array array sample 3:', someArray)

  //イミュータブル
  const commands: readonly string[] = ['git add', 'gitcommit', 'git push']
  //   commands.push("git fetch")
  console.log('Array array sample 4:', commands)
}
