import express from 'express'
import jsonServer from 'json-server'
import path from 'path'
import {fileURLToPath} from 'url';

const PORT = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create()
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public')
})
const router = express.Router()
const jsonRouter = jsonServer.router(path.join(__dirname, 'db.json'))

router.use('/api', jsonRouter)

server.use(middlewares)
server.use(router)

server.get('/imgur-token', (req, res) => {
  res.send(process.env.IMGUR_TOKEN);
})

server.listen(PORT, () => {
  console.log(`JSON server running on port ${PORT}`)
})