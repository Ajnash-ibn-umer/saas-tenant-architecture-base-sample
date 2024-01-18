import { Inject, Injectable, Optional } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Product, ProductSchema } from 'src/models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL') private readonly productModel: Model<Product>,
    @InjectConnection() private connection: Connection,
   @Optional() private i:0
  ) {
    console.log('service instance created');
     this.i=0
  }
 
  async create(createProductDto: CreateProductDto, tenantId: string) {
   
    const p = await new this.productModel(createProductDto).save();

    return 'Product created';
  }

  async findAll() {
   this.i++;
   console.log({i:this.i});
   
    return await this.productModel.find({});
  }
}
