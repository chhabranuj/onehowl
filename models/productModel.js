import { Schema, model, models } from "mongoose";

const ProductModel = new Schema({
    category: {type: String},
    items: {type: Array}
});

const Product = models.Product || model("Product", ProductModel);

export default Product;