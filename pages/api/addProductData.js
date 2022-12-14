import { getSession } from "next-auth/react";
import clientPromise from "../../lib/mongodb";
import ProductModel from "../../models/productModel";

const AddProductData = async (req, res) => {
    const session = await getSession({req});

    if(!session) {
        res.status(401).json({error: "Unautheticated User"});
    }
    else {
        try {
            const client = await clientPromise;
            const database = client.db(process.env.MONGO_DB);
            const productCollection = database.collection("productCollection");
            const data = {
                    category: "",
                    items: []
                    
            }
            productCollection.insertOne(data, (error, result) => {
                if(error) {
                    console.log("Something went wrong.");
                }
                else {
                    res.send({result: result});
                }
            });
        }
        catch(error) {
            console.log(error);
        }
    }
}

export default AddProductData;