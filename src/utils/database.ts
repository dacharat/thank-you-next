import { open } from 'sqlite'
import { Database } from 'sqlite3'

export const connectDB = async () => {
  return open({
    filename: './mydb.sqlite',
    driver: Database,
  })
}

export const connectMicrophoneDB = async () => {
  return open({
    filename: './microphones.sqlite',
    driver: Database,
  })
}
