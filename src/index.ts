// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('ハローワールド')
// world.sayHello(root)

// import { primitiveSample } from "./basic";
// import { notExistSample} from './basic'
// import { anySample} from './basic'
// import { unknownSample} from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/ parameters'

logMessage('Hello teoplz')
isUserSignedIn('ABC', 'teoplz')
isUserSignedIn('ABCD', 'teoplz')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log('Func Parameters sample 5: Sum = ', sum)
