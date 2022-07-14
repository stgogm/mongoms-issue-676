import { MongoMemoryReplSet } from 'mongodb-memory-server'

export default async () => {
  const replSet = await MongoMemoryReplSet.create({
    replSet: {
      count: 3,
    },
  })

  global.MONGODB_REPL_SET = replSet
  process.env.MONGO_URI = replSet.getUri(`test-db-${Date.now()}`)

  console.log('\nMongo memory server running at', process.env.MONGO_URI)
}
