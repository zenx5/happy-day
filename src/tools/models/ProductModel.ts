import BaseModel from "./BaseModel";

interface ProductType {
    id: String,
    image: String,
    name: String,
    description: String,
    price: Number,
    createdAt: Date
}

export default class ProductModel extends BaseModel {

    static tableName = "products"
}