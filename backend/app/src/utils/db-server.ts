import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function dbServer(){
    const dbServer = await prisma.lojas.createMany({
       data: [
            {    
               name: 'Incomportas',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Dois irmãos',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Construtelha',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Casa bela',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Construção Ramos',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Dois irmãos filial 2',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Teixeirão',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
            {    
               name: 'Bom de preço',
               time: '60 á 120min',
               avaliation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend.',
               price: 'R$ 9,99',
            },
        ]
    })
    console.log('create lojas ', dbServer)
    return dbServer;
}

dbServer().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect()); 
