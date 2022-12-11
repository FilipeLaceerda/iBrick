import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  const lojas = await prisma.detail.findMany()
  res.json(lojas);
})


app.listen(3003, () =>
console.log('REST API server ready'),
)