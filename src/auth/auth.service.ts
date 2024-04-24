import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
// import { AuthDto } from './dto/auth.dto';
// import * as bcrypt from 'bcrypt';
// import { jwtSecret } from '../utils/constants';
import { JwtService} from '@nestjs/jwt';

import { Request, Response } from 'express';

// @Injectable()
// export class AuthService {
//    constructor(private prisma: PrismaService, private jwt: JwtService) {}

   // async signup(dto: AuthDto) {    
   //    const {email, password} = dto;

   //    const foundUser = await this.prisma.user.findUnique({where: {email}});
   //    if (foundUser) {
   //       throw new BadRequestException('Email já existe');
   //    }

   //    const hashedPassword = await this.hashPassword(password)

   //    await this.prisma.user.create({
   //       data: {
   //          nome: "",
   //          sobrenome: "",
   //          //username: "",
   //          email,
   //          telefone: "1",            
   //          hashedPassword,
            
   //       }
   //    })

   //    return { message: 'signup ok'}
   // }
   
   // async signin(dto: AuthDto, req: Request , res: Response) {
   //    const {email, password} = dto;
   //    const foundUser = await this.prisma.user.findUnique({where: {email}});
   //    if (!foundUser) {
   //       throw new BadRequestException('Email desconhecido');
   //    }      
   //    const isMatch = await this.comparePasswords({password, hash: foundUser.hashedPassword})
   //    if (!isMatch){
   //       throw new BadRequestException("Senha inválida")
   //    }

   //    const token = await this.signToken({
   //       id: foundUser.id,
   //       email:foundUser.email
   //    });

   //    if (!token){
   //       throw new ForbiddenException();
   //    }

   //    res.cookie('token', token);
   //    return res.send({message: 'Login realizado com sucesso'})
   // }

   // async signout(req: Request , res: Response) {     
   //    res.clearCookie('token') 
   //    return res.send({message: 'Logout realizado com sucesso'})
   // }

   // async hashPassword(password: string){
   //    const saltOrRounds = 10;
   //    return await bcrypt.hash(password, saltOrRounds);      
   // }

   // async comparePasswords(args: {password: string, hash: string}) {
   //    return await bcrypt.compare(args.password, args.hash); 
   // }

   // async signToken(args: {id:number, email: string}) {
   //    const payload = args

   //    return this.jwt.signAsync(payload, {secret: jwtSecret })
   // }
//}
