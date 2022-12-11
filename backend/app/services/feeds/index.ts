import { lojas, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  let myCursor: number = 1
  const lojas = await prisma.lojas.findMany({
    take: 4,
    skip: 1,
    cursor: {
      id: myCursor
    }
  })
  const lastResult: lojas = lojas[3];
  myCursor = lastResult.id
  res.json(lojas);
})


app.listen(3002, () =>
console.log('REST API server ready at: http://localhost:3000'),
)