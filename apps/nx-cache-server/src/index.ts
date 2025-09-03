import app from './apps'

app.get('/', () => 'Hellossf Elysia')

app.listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
