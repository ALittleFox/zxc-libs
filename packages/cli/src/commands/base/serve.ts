import { logger } from '@zxc/utils'
import type { Command } from 'commander'

export function serve(program: Command) {
  return program
    .createCommand('serve')
    .description('serve project')
    .action(() => {
      logger.info('serve project')
    })
}
