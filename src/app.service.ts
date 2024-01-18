import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let message="hai"
    
    return 'Hello World!';
  }
}
