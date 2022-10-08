import { Schema, model, models } from "mongoose";

const ProductModel = new Schema({
    _id: {type: String},
    brandImage: {type: String},
    productData: {type: Object}
});

const Product = models.Product || model("Product", ProductModel);

export default Product;