import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/lojas', async (req, res) => {
  const result = await prisma.lojas.findMany();
  console.log(result);
  return res.json(result) 
  
})

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users);
})

app.listen(3000, () =>
console.log('REST API server ready at: http://localhost:3000'),
)