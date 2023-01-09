export default function unknownSample() {
  const test: unknown = 10

  console.log('unknown sample 1:', typeof test, test)

  const isFoo = test === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)
}
