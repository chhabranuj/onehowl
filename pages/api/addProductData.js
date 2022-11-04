import clientPromise from "../../lib/mongodb";
import ProductModel from "../../models/productModel";

const AddProductData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const productCollection = database.collection("productCollection");
        const data = {
                category: "nonVeg",
                items: [
                    {
                        id: "butterChicken",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/butterChicken.avif",
                              title: "Butter Chicken",
                               rating: "4.7",
                                realPrice: "280",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "chickenTikka",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenTikka.avif",
                              title: "Chicken Tikka",
                               rating: "4.2",
                                realPrice: "300",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "chickenYakhni",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenYakhni.avif",
                              title: "Chicken Yakhni",
                               rating: "4.3",
                                realPrice: "290",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "chickenKorma",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenKorma.avif",
                              title: "Chicken Korma",
                               rating: "4.0",
                                realPrice: "260",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "kadaiChicken",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/kadaiChicken.avif",
                              title: "Kadai Chicken",
                               rating: "4.4",
                                realPrice: "320",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "chickenLababdar",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenLababdar.avif",
                              title: "Chicken Lababdar",
                               rating: "4.8",
                                realPrice: "350",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "chickenDoPyaza",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenDoPyaza.jpeg",
                              title: "Chicken Do Pyazar",
                               rating: "4.5",
                                realPrice: "320",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "hariyaliChicken",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/haryaliChicken.webp",
                              title: "Hariyali Chicken",
                               rating: "4.6",
                                realPrice: "300",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "eggCurry",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/eggCurry.avif",
                              title: "Egg Curry",
                               rating: "4.3",
                                realPrice: "180",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "eggBhurji",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/eggBhurji.avif",
                              title: "Egg Bhurji",
                               rating: "4.0",
                                realPrice: "200",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "muttonKebab",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonKebab.avif",
                              title: "Mutton Kebab",
                               rating: "4.1",
                                realPrice: "240",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "muttonJosh",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonJosh.avif",
                              title: "Mutton Josh",
                               rating: "4.6",
                                realPrice: "290",
                                discount: "5",
                                isVeg: false
                    },
                    {
                        id: "muttonCurry",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonCurry.avif",
                              title: "Mutton Curry",
                               rating: "4.7",
                                realPrice: "340",
                                discount: "5",
                                isVeg: false
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