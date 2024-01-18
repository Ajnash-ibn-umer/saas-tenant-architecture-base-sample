import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const tenantId=req.headers["x-tenant-id"]?.toString()
    console.log({tenantId});
    
    if(!tenantId) throw new HttpException("x-tenant-id not provided",HttpStatus.BAD_REQUEST)
    req["tenantId"]=tenantId
    next();
  }
}
