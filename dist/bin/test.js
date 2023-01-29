'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
const assert_1 = require('@japa/assert')
const api_client_1 = require('@japa/api-client')
const spec_reporter_1 = require('@japa/spec-reporter')
const run_failed_tests_1 = require('@japa/run-failed-tests')
const runner_1 = require('@japa/runner')
;(0, runner_1.configure)({
  ...(0, runner_1.processCliArgs)(process.argv.slice(2)),
  ...{
    files: ['tests/**/*.spec.ts'],
    plugins: [
      (0, assert_1.assert)(),
      (0, run_failed_tests_1.runFailedTests)(),
      (0, api_client_1.apiClient)('http://localhost:3333'),
    ],
    reporters: [(0, spec_reporter_1.specReporter)()],
    importer: (filePath) => {
      var _a
      return (_a = filePath), Promise.resolve().then(() => __importStar(require(_a)))
    },
  },
})
;(0, runner_1.run)()
