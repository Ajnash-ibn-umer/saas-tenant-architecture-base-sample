import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Connection } from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
    @Inject("TENANT_CONNECTION") private tenantConnection:Connection,
    
    ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto,@Req() req) {
    return this.productsService.create(createProductDto,req.tenantId);
  }

  @Get()
  find(@Req(){tenantId}) {
    return this.productsService.findAll();
    // return this.tenantConnection.db.databaseName
  }


}
