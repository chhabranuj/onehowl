import { Schema, model, models } from "mongoose";

const userModel = new Schema({
    _id: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    address: {type: String},
    state: {type: String},
    city: {type: String},
    pinCode: {type: String},
    phoneNumber: {type: String},
    cart: {type: Array}
})

const UserModel = models.UserModel || model("UserModel", userModel);

export default UserModel;