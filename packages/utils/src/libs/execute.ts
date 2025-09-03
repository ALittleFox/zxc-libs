import { exec } from 'node:child_process'
import pc from 'picocolors'
import { logger } from './logger'

/**
 * 执行 shell 命令
 * @param cmd shell 命令
 * @returns Promise<string> 执行结果
 */
export const execute = (cmd: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        logger.error(pc.red(`执行出错: `), error)
        reject(error)
        return
      }
      if (stderr) {
        logger.error(pc.red(`Git 错误输出: `), stderr)
        reject(stderr)
        return
      }

      const gitUsername = stdout.trim()
      if (gitUsername) {
        resolve(gitUsername)
      } else {
        resolve('')
      }
    })
  })
}
