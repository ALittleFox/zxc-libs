import { logger } from '@zxc/utils'
import type { Command } from 'commander'
import prompts from 'prompts'

export function greet(program: Command) {
  return program
    .createCommand('greet')
    .description('greet')
    .action(async () => {
      const namRes = await prompts({
        type: 'text',
        name: 'name',
        message: 'what is your name',
      })
      const hobby = await prompts({
        type: 'select',
        name: 'value',
        message: 'what is your hobby',
        choices: [
          { title: 'sleep', value: 'sleep' },
          { title: 'eat', value: 'eat' },
          { title: 'play', value: 'play' },
        ],
      })

      logger.info(`hello ${namRes.name}, your hobby is ${hobby.value}`)
    })
}
