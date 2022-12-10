import clientPromise from "../../lib/mongodb";

const UpdateUserMmodel = async (req, res) => {
    try{
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const userCollection = database.collection("userCollection");
        const data = req.body;
        const user = await userCollection.findOne({_id: data._id});
        if(user) {
            userCollection.updateOne({_id: data._id},{$set:{info: data.userData}}, (error, result) => {
                if(error) {
                    res.send({result: false})
                    console.log("Something went wrong!!!");
                }
                else {
                    res.send({result: true, infoData: data.userData})
                }
            })
        }
    }
    catch(error) {
        console.log(error.response.data);
    }
}

export default UpdateUserMmodel;