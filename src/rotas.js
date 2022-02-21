import controller from './controllers.js'

export default function (app) {
  try {
    app.get('/', (res, req) => {res.send('Server ok')})
    app.get('/enviar', controller.enviar)
  } catch (error) {
    throw new Error(`Erro no Método Rotas Geral ${error.message}`)
  }
}