import { getSession } from "next-auth/react";
import clientPromise from "../../lib/mongodb";
import UserModel from "../../models/userModel";

const AddUserModel = async (req, res) => {
    const session = await getSession({req});

    if(!session) {
        res.status(401).json({error: "Unautheticated User"});
    }
    else {
        try{
            const client = await clientPromise;
            const database = client.db(process.env.MONGO_DB);
            const userCollection = database.collection("userCollection");
            const data = new UserModel(req.body);
            const user = await userCollection.findOne({_id: data._id});
            if(user) {
                res.send({user, userExist: true, error: false})
            }
            else {
                if(data.info) {
                    userCollection.insertOne(data, (error, result) => {
                        if(error) {
                            console.log("Something went wrong!!");
                            res.send({error: true})
                        }
                        else {
                            res.send({user: data, error: false});
                        }
                    })
                }
                else {
                    res.send({userExist: false, error: false})
                }
            }
        }
        catch(error) {
            console.log(error.response.data);
        }
    }
}

export default AddUserModel;