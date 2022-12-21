import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/:id', async (req, res) => {
  const { id } = req.params
  const lojas = await prisma.detail.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  res.json(lojas);
})


app.listen(3003, () =>
console.log('REST API server ready'),
)