import { Schema, model, models } from "mongoose";

const OrderModel = new Schema({
    _id: {type: String},
    orders: {type: Object},
});

const Order = models.Order || model("Order", OrderModel);

export default Order;