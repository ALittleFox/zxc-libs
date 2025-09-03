import { program } from 'commander'
import { createCommand } from './commands'

export const defineConfig = () => {
  //
}

export const runCLI = () => {
  createCommand()
  //
  program.parse(process.argv)
}
