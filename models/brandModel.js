import { Schema, model, models } from "mongoose";

const BrandSchema = new Schema({
    _id: {type: String},
    brandName: {type: String},
    brandAbout: {type: String},
    brandColor: {type: String},
    brandLogo: {type: String}
})

const Brand = models.Brand || model("Brand", BrandSchema);

export default Brand;