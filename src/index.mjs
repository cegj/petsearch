import express from 'express'
import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath, URL } from 'url';
import Mailjet from 'node-mailjet';
import fetch from 'node-fetch';

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

server.use(jsonServer.bodyParser)

server.get('/imgur-token', (req, res) => {
  res.send(process.env.IMGUR_TOKEN);
})


//Config Mailjet to send emails
const mailjet = new Mailjet({
  apiKey: process.env.MJ_API_KEY,
  apiSecret: process.env.MJ_API_SECRET
});

server.post('/send/tutor', (req, res) => {
  console.log(req.body);
  const petId = req.body.petId;
  const type = req.body.type;
  const name = req.body.name; 
  const email = req.body.emailfrom;
  const phone = req.body.phone;
  const message = req.body.message;

  async function fetchPet () {
    try {
      let api;
      if (type === 'lost'){
          api = 'lost-pets';
      } else if (type === 'found'){
          api = 'found-pets'
      } else if (type === 'adoption'){
          api = 'adoption-pets'
      }
      
      const url = `${req.headers.origin}/api/${api}?id=${petId}`

      const response = await fetch( url );
      let pet = await response.json();
      pet = pet[0];

      //SEND EMAIL
      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "petsearchpuc@gmail.com",
                Name: `PetSearch`
              },
              To: [
                {
                  Email: pet.tutorEmail,
                  Name: pet.tutorName
                }
              ],
              Subject: `Nova mensagem de ${name}`,
              HTMLPart:
              `<h1>Você recebeu uma nova mensagem sobre o pet ${pet.name}</h1>
              Nome: ${name}<br>
              Telefone: ${phone}<br>
              E-mail: ${email}<br>
              <h2>Mensagem:</h2>
              ${message}
              <br>
              <br><a href="http://pet-search-puc.herokuapp.com"><b>PetSearch</b> - Ajudamos a [re]encontrar o seu pet!</a>
              <br>Após o resgate do pet, não esqueça de marcá-lo como devolvido no site!
              `
            }
          ]
        })

  request
      .then((result) => {
          res.send(result.body)
      })
      .catch((err) => {
          res.send(err.statusCode)
      })
    } catch ( e ) {
        console.log( 'erro' )
        console.log( e );
    }
    }

    fetchPet();
})

server.listen(PORT, () => {
  console.log(`JSON server running on port ${PORT}`)
})