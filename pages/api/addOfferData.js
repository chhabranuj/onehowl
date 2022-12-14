import { getSession } from "next-auth/react";
import clientPromise from "../../lib/mongodb";

const AddOfferModel = async (req, res) => {
    const session = await getSession({req});

    if(!session) {
        res.status(401).json({error: "Unautheticated User"});
    }
    else {
        try {
            const client = await clientPromise;
            const database = client.db(process.env.MONGO_DB);
            const offerCollection = database.collection("offerCollection");
            const data = {
                couponCode: "HOWL50",
                couponDetail: "Get 50% off on order of 500 and above.",
                discount: "50",
                minimumOrder: "500"
            }
            offerCollection.insertOne(data, (error, result) => {
                if(error) {
                    console.log("Something went wrong.");
                }
                else {
                    console.log("Ok Rpt hai!!!")
                }
            });
        }
        catch(error) {
            console.log(error.response.data);
        }
    }
}

export default AddOfferModel;