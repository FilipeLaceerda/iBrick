import { lojas, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/search', async (req, res) => {
  console.log(req.query)
  const search = await prisma.lojas.findMany({
    where: {
      name: (req.query.search as string)
    }
  })
  res.json(search)
})

app.get('/', async (req, res) => {
  console.log(req.query.page);
  const page: number = parseInt(req.query.page as string);
  const lojas = await prisma.lojas.findMany({
    take: 4,
    skip: 0,
    cursor: {
      id: page
    },
    orderBy: {
      id: 'asc'
    }
  })
  res.json(lojas);
})


app.listen(3002, () =>
console.log('REST API server ready at: http://localhost:3000'),
)