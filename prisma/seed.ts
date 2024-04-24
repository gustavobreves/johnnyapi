// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
//import { AuthService } from 'src/auth/auth.service';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'gustavo.breves@gmail.com' },
    update: {},
    create: {
      nome: 'Gustavo',
      sobrenome: 'Breves',
      //username: 'gustavo.breves',
      email: 'gustavo.breves@gmail.com',
      telefone: '21 996071770',
      fotoPerfil: 'gustavo.breves.png',
      ativo: true,    
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'wagner.cavaliere@qqcoisa.com.br' },
    update: {},
    create: {
      nome: 'Wagner',
      sobrenome: 'Cavaliere',
      //username: 'jayme.pereira',
      email: 'wagner.cavaliere@qqcoisa.com.br',
      telefone: '21 988513001',
      fotoPerfil: 'wagner.cavaliere.png',
      ativo: true,
    },
  });

  const eventoTipo1 = await prisma.eventoTipo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Casamento'
    }
  });

  const eventoTipo2 = await prisma.eventoTipo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: '15 Anos'
    }
  });

  const eventoTipo3 = await prisma.eventoTipo.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      nome: 'Aniversário'
    }
  });

  const evento1 = await prisma.evento.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      idEventoTipo: 1,
      dataHora: new Date('2024-12-15T19:30Z'),
      indicadoPor: 'Gustavo',
      local: 'Mansão Rosa',
      statusVenda: 'CI',
      status: 'A',
      //cliente: 
    }
  })

  const cliente1 = await prisma.cliente.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Camila Quintela',
      telefone: '24996071880',
      idEvento: 1,
    }
  })

  const cliente2 = await prisma.cliente.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: 'Angela Quintela',
      telefone: '24996071890',
      idEvento: 1,
    }
  })

  console.log({
  
    user1, user2,
    eventoTipo1, eventoTipo2, eventoTipo3, 
    evento1,
    cliente1, cliente2
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
