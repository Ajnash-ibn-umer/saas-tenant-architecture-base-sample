import { HttpException, HttpStatus, Optional } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ProductSchema ,Product} from 'src/models/product.model';

export const tenantModels ={
    productModel:{
        provide: 'PRODUCT_MODEL',
        useFactory: async (tenantConnection:Connection) => {
      console.log({tenantConnection});
      
          return tenantConnection.model("products", ProductSchema)
        },
        inject: [getConnectionToken()],
    }

}
