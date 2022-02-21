import amqp from 'amqplib/callback_api.js'
import servicos from './servicos.js'

export default function () {
  try {
    amqp.connect({
      username: '',
      password: ''
    }, (error0, connection) => {
      if (error0) { throw error0 }
      connection.createChannel((error1, channel) => {
        if (error1) { throw error1 }
        channel.consume('Email', async (msg) => {
          if (msg) {
            console.log("PASSEI NO RABBIT -> ", msg.content.toString())
            const retorno = await servicos.enviar()
          }
        }, {
          noAck: true
        })
      })
    })
  } catch (error) {
  }
}