import { logger } from '@zxc/utils'
import type { Command } from 'commander'
import prompts from 'prompts'

const projectType = {
  apps: 'apps',
  libs: 'libs',
  packages: 'packages',
} as const

export function init(program: Command) {
  return program
    .createCommand('init')
    .description('初始化项目')
    .arguments('[name]')
    .option('-t, --template <template>', '项目模板名称')
    .action(async (projectName, options) => {
      logger.log('--init project')
      const _types = {
        name: '',
        template: '',
      }
      const { template } = options

      if (!projectName) {
        const { name } = await prompts({
          type: 'text',
          name: 'name',
          message: '请输入项目名称',
        })
        // _name = name.name
        _types.name = name
      }

      if (!template) {
        const { value: _template } = await prompts({
          type: 'select',
          name: 'value',
          message: '请选择模板',
          choices: [
            { title: 'lib', value: 'lib' },
            { title: 'react', value: 'react' },
            { title: 'vue', value: 'vue' },
          ],
        })
        _types.template = _template
      }

      logger.info(_types)

      // return
    })
}
