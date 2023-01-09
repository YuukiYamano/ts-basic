export default function objectSample() {
  const a: object = {
    name: 'teoplz',
    age: 25,
  }

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }
  console.log('Object object sample 2:', country)

  //オプショなるとreadOnly

  const teoplz: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 25,
    lastName: 'Yamano',
    firstName: 'Yuki',
  }

  teoplz.gender = 'male'
  teoplz.lastName = 'Kamado'
  // teoplz.firstName = "tanjiro"
  console.log('Object object sample 3:', teoplz)

  //インデックスシグネチャ
  const capitals: {
    [countryname: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
