import { copy, readFile, writeFile } from 'fs-extra'
import { logger } from './logger'

interface Options {
  projectName: string
  projectAuthor: string
}

/**
 * Copies a template directory to the current working directory.
 *
 * @param path - The path of the template directory.
 * @param projectName - The name of the project.
 */
export const loadTemplate = async (path: string, options: Options) => {
  /**
   * 复制模板
   */
  await copy(path, `${process.cwd()}/${options.projectName}`)
  readFile(
    `${process.cwd()}/${options.projectName}/package.json`,
    async (err, data) => {
      if (err) {
        logger.error(err)
        return
      }
      // const name = execute('git config --global user.name')
      const pkg = JSON.parse(data.toString())
      pkg.name = options.projectName
      pkg.author = options.projectAuthor
      const pkgStr = JSON.stringify(pkg, null, 2)

      writeFile(
        `${process.cwd()}/${options.projectName}/package.json`,
        pkgStr,
        (err) => {
          if (err) {
            logger.error(err)
            return
          }
        },
      )
    },
  )
}
