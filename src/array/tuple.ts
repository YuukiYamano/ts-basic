export default function tupleSample() {
  //一般的なタプルの型定義

  const response: [number, string] = [200, 'OK']
  // response = [400,"Bad Request","NG"]
  // response = ["400","Bad Request"]
  console.log('Array tuple sample1:', response)

  //可変超引数
  const girlfriends: [string, ...string[]] = ['kana', 'miku', 'keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample2:', girlfriends)
}
