'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const runner_1 = require('@japa/runner')
runner_1.test.group('Maths.add', () => {
  ;(0, runner_1.test)('add two numbers', ({ assert }) => {
    assert.equal(2 + 2, 4)
  })
})
