//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId == 'ABC') {
    console.log('Func Parameters sample 1: User is signed in User name is', userName)
    return true
  } else {
    console.log('Func Parameters sample 2: User is not signed in')
    return false
  }
}

//デフォルトパラメーター
export const isUserSignedIn2 = (userId: string, userName = 'No Name'): boolean => {
  if (userId == 'ABC') {
    console.log('Func Parameters sample 3: User is signed in User name is', userName)
    return true
  } else {
    console.log('Func Parameters sample 4: User is not signed in')
    return false
  }
}

//レストパラメーター
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
