import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

// let transporter = nodemailer.createTransport({
//   pool: true,
//   host: process.env.HOST,
//   port: process.env.PORTASAIDA,
//   secure: process.env.TLS == 'true' ? true : false,
//   auth: {
//     user: process.env.USUARIO,
//     pass: process.env.PASSWORD,
//   },
// })

export default {
  async enviar () {
    try {
      console.log('"EMAIL ENVIADO"')
      // transporter.sendMail({
      //   to: 'claytonmenezes@hotmail.com',
      //   from: process.env.USUARIO,
      //   subject: 'TESTE ENVIO',
      //   text: 'TESTE 1'
      // }, (err, inf) => {
      //   if (err) {
      //     console.log('DEU RUIM ', err)
      //   }
      // })
    } catch (error) {
      throw error
    }
  }
}