import clientPromise from "../../lib/mongodb";
import ProductModel from "../../models/productModel";

const AddProductData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const productCollection = database.collection("productCollection");
        const data = {
                _id: "drinks",
                drinks: [
                    {
                        id: "water",
                               image: "/https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/water.jpeg",
                              title: "Water",
                               rating: "4.1",
                                realPrice: "40",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "tea",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/tea.jpeg",
                              title: "Tea",
                               rating: "4.7",
                                realPrice: "60",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "coffee",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/coffee.jpeg",
                              title: "Coffe",
                               rating: "4.7",
                                realPrice: "60",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "plainLassi",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/lassi.jpeg",
                              title: "Plain Lassi",
                               rating: "4.4",
                                realPrice: "70",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "mangoLassi",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/mangoLassi.jpeg",
                              title: "Mango Lassi",
                               rating: "4.5",
                                realPrice: "90",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "coke",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/coke.webp",
                              title: "Coke",
                               rating: "4.5",
                                realPrice: "80",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "frooti",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/frooti.jpeg",
                              title: "Frooti",
                               rating: "4.5",
                                realPrice: "80",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "iceTea",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/iceTea.jpeg",
                              title: "Ice Tea",
                               rating: "4.8",
                                realPrice: "100",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "redBull",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/drinks/redBull.jpeg",
                              title: "Red Bull",
                               rating: "4.7",
                                realPrice: "120",
                                discount: "5",
                                isVeg: true
                    },
                ]
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

export default AddProductData;