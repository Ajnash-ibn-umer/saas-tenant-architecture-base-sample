import * as mongoose from 'mongoose';


export const ProductSchema = new mongoose.Schema({
  _code: { type: String, required: true },
  _name: { type: String, required: true },


});

export interface Product {
  _id: string;
  _code: string;
  _name: string;


}
