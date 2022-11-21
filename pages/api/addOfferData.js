import clientPromise from "../../lib/mongodb";

const AddOfferModel = async (req, res) => {
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

export default AddOfferModel;