import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// post request route : /auth/signup

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // dependencies injection
  //   this.authService.login();
  // post request
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
