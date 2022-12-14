import { getSession } from "next-auth/react";
import clientPromise from "../../lib/mongodb";
import OrderModel from "../../models/orderModel";

const AddOrderModel = async (req, res) => {
    const session = await getSession({req});

    if(!session) {
        res.status(401).json({error: "Unautheticated User"});
    }
    else {
        try {
            const client = await clientPromise;
            const database = client.db(process.env.MONGO_DB);
            const ordersCollection = database.collection("ordersCollection");
            const data = new OrderModel(req.body);
            const user = await ordersCollection.findOne({_id: data._id});
            if(user) {
                const existingOrders = user.orders;
                existingOrders.push(data.orders);
                ordersCollection.updateOne({_id: data._id},{$set:{orders: existingOrders}}, (error, result) => {
                    if(error) {
                        console.log("Something went wrong here!!");
                    }
                    else {
                        res.send({result: "Added"});
                    }
                });
            }
            else {
                const ordersList = [];
                ordersList.push(data.orders);
                const updatedData = {
                    _id: data._id,
                    orders: ordersList
                }
                ordersCollection.insertOne(updatedData, (error, result) => {
                    if(error) {
                        console.log("Something went wrong!!");
                    }
                    else {
                        res.send({result: "Added"});
                    }
                });
            }
        }
        catch(error) {
            console.log(error);
        }
    }
}

export default AddOrderModel;