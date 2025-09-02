import { logger } from '@zxc/utils'
import type { Command } from 'commander'

export function build(program: Command) {
  return program
    .createCommand('build')
    .description('build project')
    .action(() => {
      logger.info('build project')
    })
}
