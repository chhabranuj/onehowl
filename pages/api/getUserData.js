import clientPromise from "../../lib/mongodb";

const GetUserData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const userCollection = database.collection("userCollection");
        const user = await userCollection.findOne({_id: req.body.data});
        user? res.send({result: user}): res.send({result: "userNotFind"});
    }
    catch(error) {
        console.log(error.response.data);
    }
}

export default GetUserData;