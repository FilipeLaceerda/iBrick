import { PrismaClient } from 'prisma/prisma-client';
import express from 'express';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get('/', function (_req, res) {
  res.send('hello')
});

app.get('/user/:id', async function (req, res) {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id }
    })

    res.json(user)
  } catch (err) {
    res.json(err)
  } finally {
    await prisma.$disconnect()
  }
})

app.post('/user', async function (req, res) {
  try {
    const {
      id,
      name,
      email,
      password,
    } = req.body

    const userExists = await prisma.user.findUnique({
      where: { id }
    })

    if (userExists) return;

    const user = await prisma.user.create({
      data: {
        id,
        name,
        email,
        password,
      }
    })

    res.json(user)
  } catch (err) {
    res.json(err)
  } finally {
    await prisma.$disconnect()
  }
})

app.listen(3001, () => console.log('Servidor iniciado na porta 3003'));