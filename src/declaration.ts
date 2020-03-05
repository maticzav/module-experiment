export function test() {
  console.log('DECLARATION')
  console.log({ foo: foo(), qux: qux(), bar: bar() })
  return foo
}

/**
 * This is where expressions fail.
 */
// test()

function qux() {
  return 'qux'
}

function foo() {
  return 'foo'
}

function bar() {
  return 'bar'
}
