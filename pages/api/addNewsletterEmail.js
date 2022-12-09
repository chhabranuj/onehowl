import clientPromise from "../../lib/mongodb";

const AddNewsletterEmailModel = async (req, res) => {
    try{
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const userCollection = database.collection("userCollection");
        const data = req.body;
        const user = await userCollection.findOne({_id: data._id});
        if(user) {
            const tempInfo = user.info;
            tempInfo.newsletterEmail = data.newsletterEmail
            userCollection.updateOne({_id: data._id},{$set:{info: tempInfo}}, (error, result) => {
                if(error) {
                    res.send({result: false})
                    console.log("Something went wrong!!!");
                }
                else {
                    res.send({result: true, infoData: tempInfo})
                }
            })
        }
    }
    catch(error) {
        console.log(error.response.data);
    }
}

export default AddNewsletterEmailModel;