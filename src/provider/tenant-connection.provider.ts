import { HttpException, HttpStatus, Optional } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

export const tenantConnectionProvider = {
  provide: 'TENANT_CONNECTION',
  useFactory: async (request, connection: Connection) => {
    console.log({getConn:getConnectionToken(request.tenantId.toString())});
    
    if (!request['tenantId']) {
      throw new HttpException(
        'middle not added',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    console.log(request.tenantId);

    return connection.useDb(`tenant_${request.tenantId.toString()}`);
    // return 
  },
  inject: [REQUEST, getConnectionToken()],
};
