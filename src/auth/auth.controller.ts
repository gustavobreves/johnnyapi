import { Body, Controller, HttpException, Post } from '@nestjs/common';
//import { AuthService } from './auth.service';
import { AuthDto } from './dto/auto.dto';

@Controller('auth')
export class AuthController {
   //constructor(private authService: AuthService) {}

   @Post('login')
   login(@Body() autoDto: AuthDto) {      
      // const user = this.authService.validateUser(autoDto);
      // return user.
      // if (!user) throw new HttpException('Credenciais inválidas', 401);
   }
}
