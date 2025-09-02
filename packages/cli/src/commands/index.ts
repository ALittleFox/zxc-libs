// import { logger } from '@zxc/utils'
import { build } from './base/build'
import { greet } from './base/greet'
import { info } from './base/info'
import { init } from './base/init'
import { serve } from './base/serve'
import { registerCommand } from './registerCommand'

export function createCommand() {
  registerCommand(init)
  registerCommand(build)
  registerCommand(serve)
  registerCommand(greet)
  registerCommand(info)
}
