import express from 'express'
import cors from 'cors'
import rotas from './src/rotas.js'
import dotenv from 'dotenv'
import rabbitmq from './src/rabbitmq.js'
dotenv.config()

let app = express()
app.set('port', 2510)
app.use(cors())

async function start () {
  try {
    rabbitmq()
    rotas(app)
    app.listen(app.get('port'), async () => {
      console.log('Servidor rodando na porta', app.get('port'))
    })
  } catch (error) {
    console.error(error.message)
  }
}

start()