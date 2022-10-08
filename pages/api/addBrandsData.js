import clientPromise from "../../lib/mongodb";
import BrandModel from "../../models/brandModel.js";

const AddBrandsData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const brandsCollection = database.collection("brandsCollection");
        const data = [
            new BrandModel({
                    _id: "sta",
                    brandName: "Starbucks", 
                    brandAbout: "Starbucks is one of the best brand of drinks chain that provide best and most amazing drinks including Cold and Hot coffees. One howl provides all the hot and cold ranges of starbucks coffee.",
                    brandColor: "#0d6e31",
                    brandLogo: "/logos/starbucksLogo.svg",
                    brandImage: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/brands/pizzaHut.jpeg"
                })
        ];
        brandsCollection.insertMany(data, (error, result) => {
            if(error) {
                console.log("Something went wrong");
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

export default AddBrandsData;