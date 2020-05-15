const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

// const setup = async () => {
//   const db = await sqlite.open({
//     filename: './mydb.sqlite',
//     driver: sqlite3.Database,
//   })
//   await db.migrate({ force: 'last' })

//   const people = await db.all('SELECT * FROM person')
//   console.log('ALL PEOPLE', JSON.stringify(people, null, 2))

//   const vehicles = await db.all('SELECT * FROM vehicle')
//   console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 2))
// }

// setup()

const setupMicrophone = async () => {
  // open the database
  const db = await sqlite.open({
    filename: './microphones.sqlite',
    driver: sqlite3.Database,
  })

  await db.migrate({ force: true })
  const microphones = await db.all('select * from microphone')
  console.log(JSON.stringify(microphones, null, 4))
}

setupMicrophone()
