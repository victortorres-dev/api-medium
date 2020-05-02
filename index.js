// Arranque de  app

const app = require('./src/server')

const db = require('./src/lib/db')

const PORT = 8082

async function main () {
  await db.connectToDB()
  console.log('DB Connected')
  app.listen(PORT, () => {
    console.log('Server is listenning on Port: ', PORT)
  })
}

main()
  .then(() => {
    console.log('The connection to DB it´s Ok')
  }).catch((err) => {
    console.log('Error to connect to DB ', err)
  })
  .finally(() => {
    console.log('The Connection Process Ended')
  })
