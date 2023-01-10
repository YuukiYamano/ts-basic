export default function genericsAdvancedSample() {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringToNumbers: Map<string, number> = (array: string[], fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringToNumbers(['123', '456', '789'], (item: string) => Number(item))

  console.log('Generics advanced sample 1:', numbers)

  const mapNumberToStrings: Map<number, string> = (array: number[], fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const strings = mapNumberToStrings([123, 456, 789], (item: number) => String(item))

  console.log('Generics advanced sample 2:', strings)
}
