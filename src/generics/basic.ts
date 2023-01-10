export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 1:', stringReduce(['あ', 'い', 'う', 'え', 'お'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array: string[], initialValue: string) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3:', stringReduce(['か', 'き', 'く', 'け', 'こ'], ''))

  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
