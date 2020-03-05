export const test = () => {
  console.log('EXPRESSION')
  console.log({
    fooF: fooF(),
    quxF: quxF(),
    barF: barF(),
  })
}

/**
 * This is where declarations work.
 */
// test()

const quxF = () => {
  return 'qux'
}

const fooF = () => {
  return 'foo'
}

const barF = () => {
  return 'bar'
}

/**
 * Expressions, loaded when the file is requested.
 */
const qux = (() => {
  console.log('QUX')
  return 'qux'
})()

const foo = (() => {
  console.log('FOO')
  return 'foo'
})()

const bar = (() => {
  console.log('BAR')
  return 'bar'
})()
