import servicos from './servicos.js'

export default {
  async enviar (req, res) {
    try {
      console.log('PASSEI NO CONTROLLER')
      const retorno = await servicos.enviar()
      res.sendStatus(200)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}