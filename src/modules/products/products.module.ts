import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/models/product.model';
import { TenantsMiddleware } from 'src/middlewares/tenants/tenants.middleware';
import { tenantConnectionProvider } from 'src/provider/tenant-connection.provider';
import { tenantModels } from 'src/provider/tenant-model.provider';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService,tenantConnectionProvider,tenantModels.productModel],

})
export class ProductsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductsController)
  }
}
