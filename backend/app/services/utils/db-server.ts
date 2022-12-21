import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function dbServer(){
    const dbServer = await prisma.lojas.createMany({
       data: [
            {    
               name: 'Incomportas',
               time: '60 á 120min',
               avaliation: '4.4',
               price: 'R$ 9,99',
            },
            {    
               name: 'Dois irmãos',
               time: '60 á 120min',
               avaliation: '4.5',
               price: 'R$ 9,99',
            },
            {    
               name: 'Construtelha',
               time: '60 á 120min',
               avaliation: '4.6',
               price: 'R$ 9,99',
            },
            {    
               name: 'Casa bela',
               time: '60 á 120min',
               avaliation: '4.7',
               price: 'R$ 9,99',
            },
            {    
               name: 'Construção Ramos',
               time: '60 á 120min',
               avaliation: '4.2',
               price: 'R$ 9,99',
            },
            {    
               name: 'Dois irmãos filial 2',
               time: '60 á 120min',
               avaliation: '4.6',
               price: 'R$ 9,99',
            },
            {    
               name: 'Teixeirão',
               time: '60 á 120min',
               avaliation: '4.4',
               price: 'R$ 9,99',
            },
            {    
               name: 'Bom de preço',
               time: '60 á 120min',
               avaliation: '4.4',
               price: 'R$ 9,99',
            },
        ]
    })
    console.log('create lojas ', dbServer)
    dbServerDetail().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect());
    return dbServer;
}

async function dbServerDetail() {
   const dbServerDetail = await prisma.detail.createMany({
      data: [
         {
            deitalId: 1,
            descricao: 'Lorem ipsum',
            endereco: 'Av juracy magalhães -  500',
            tel: '(77) 34200-5555'
         },
         {
            deitalId: 2,
            descricao: 'Lorem ipsum',
            endereco: 'Av frei benjamin -  500',
            tel: '(77) 34200-5555'
         },
         {
            deitalId: 3,
            descricao: 'Lorem ipsum',
            endereco: 'Av juracy magalhães -  500',
            tel: '(77) 3422-5555'
         },
         {
            deitalId: 4,
            descricao: 'Lorem ipsum',
            endereco: 'Av luis eduardo magalhães -  500',
            tel: '(77) 3421-5555'
         },
         {
            deitalId: 6,
            descricao: 'Lorem ipsum',
            endereco: 'Av juracy magalhães -  550',
            tel: '(77) 3433-0025'
         },
         {
            deitalId: 7,
            descricao: 'Lorem ipsum',
            endereco: 'Av juracy magalhães -  500',
            tel: '(77) 3426-6325'
         },
      ]
   })
   console.log('Detail', dbServerDetail);
   return dbServerDetail;
}

dbServer().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect()); 
