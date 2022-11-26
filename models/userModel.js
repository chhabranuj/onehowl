import { Schema, model, models } from "mongoose";

const userModel = new Schema({
    _id: {type: String},
    info: {type: Object},
    cart: {type: Array}
})

const UserModel = models.UserModel || model("UserModel", userModel);

export default UserModel;