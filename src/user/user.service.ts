import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request } from 'express';

// @Injectable()
// export class UsersService {
//    constructor(private prisma: PrismaService) {}

   // async getMyUser(id: number, req: Request) {
   //    const i = Number(id)
   //    //const myNumber = parseInt(id);
   //    const user = this.prisma.user.findFirst({where: {id:i}})

   //    if (!user) {
   //       throw new NotFoundException()
   //    }

   //    const decodedUser = req.user as {id: number, email: string}

   //    if ((await user).id !== decodedUser.id){
   //       throw new ForbiddenException()
   //    }
      
   //    delete (await user).hashedPassword;
   //    return user ;
   // }

//    async getUsers() {
//       return await this.prisma.user.findMany();
//    }
// }
