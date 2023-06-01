import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// post request route : /auth/signup

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService) {}
        // dependencies injection
        //   this.authService.login();
     // post request  
     @Post('signup')
     signup(){
        return this.authService.signup();
     };
  
     @Post('signin')
     signin(){
        return this.authService.signin();
     };
    }