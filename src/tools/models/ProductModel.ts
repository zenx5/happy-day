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

    static async create(data:ProductType) {
        try{
            // const fields:any = {
            //     id: 'string',
            //     image: 'string',
            //     name: 'string',
            //     description: 'string',
            //     price: 'number',
            //     date: 'date'
            // }
            // for( const field of Object.keys(fields) ) {
            //     if( data[field] === undefined ) {
            //         throw new Error(`Field ${field} is required`)
            //     }
            //     if( typeof data[field]!== fields[field] ) {
            //         throw new Error(`Field ${field} must be ${fields[field]}`)
            //     }
            // }
            return await this.post( data )
        } catch( error ) {
            console.log(error)
            return error
        }
        
    }
}