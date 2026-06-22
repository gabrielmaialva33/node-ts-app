import console from 'node:console'
import { env } from './env.js'
import { systemInfo } from './system.js'

// Importing env validates environment variables at boot (fail-fast on the edge).
systemInfo()

console.log(`    Environment: ${env.NODE_ENV} (debug=${env.DEBUG}, log level=${env.LOG_LEVEL})\n`)
