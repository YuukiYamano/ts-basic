export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'teoplz'
  if (!name) {
    console.log('notExist sample 3', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('notExist sample 2', '吾輩は猫である。名前は' + name)
  }

  const age = 25
  console.log('notExist sample 4', typeof age, age)

  if (!age) {
    console.log('notExist sample 5', '年齢は秘密です')
  } else {
    console.log('notExist sample 5', age + '歳です')
  }
}
