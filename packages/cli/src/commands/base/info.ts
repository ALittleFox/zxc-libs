import { logger } from '@zxc/utils'
import type { Command } from 'commander'
import { version } from '../../../package.json'
export function info(program: Command) {
  program.version(version)
  return program
    .createCommand('info')
    .description('info project')
    .option('-t, --template <template>', '模板名称')
    .action(() => {
      logger.info('info project')
    })
}
