import { resolve } from 'node:path'
import { execute, loadTemplate, logger } from '@zxc/utils'
import type { Command } from 'commander'
import pc from 'picocolors'
import prompts from 'prompts'

export function init(program: Command) {
  return program
    .createCommand('init')
    .description('初始化项目')
    .arguments('[name]')
    .option('-t, --template <template>', '项目模板名称')
    .action(async (projectName, options) => {
      logger.log(pc.blue('开始创建项目：'))
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

      const _projectAuthor = await execute('git config --global user.name')
      const { projectAuthor } = await prompts({
        type: 'text',
        name: 'projectAuthor',
        message: '请输入项目名称',
        initial: _projectAuthor,
      })

      // const path = __dirname
      const path = resolve(
        __dirname,
        `../templates/template-${_types.template}`,
      )

      await loadTemplate(path, {
        projectName: _types.name,
        projectAuthor,
      })
      logger.info(pc.green('创建成功'))

      logger.log(pc.blueBright(`请进入目录初始化项目：`))
      logger.log(
        pc.blueBright(` cd ${_types.name}\n`),
        pc.blueBright(`npm install`),
      )
    })
}
