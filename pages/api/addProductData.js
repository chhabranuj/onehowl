import clientPromise from "../../lib/mongodb";
import ProductModel from "../../models/productModel";

const AddProductData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const productCollection = database.collection("productCollection");
        const data = {
                category: "breads",
                items: [
                    {
                        id: "tawaRoti",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/tawaRoti.avif",
                              title: "Tawa Roti",
                               rating: "4.1",
                                realPrice: "8",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "tandooriRoti",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/tandooriRoti.avif",
                              title: "Tandoori Roti",
                               rating: "4.7",
                                realPrice: "12",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "tandooriButterRoti",
                               image: "/mcDonalds/veg1.png",
                              title: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/tandooriButterRoti.avif",
                               rating: "4.3",
                                realPrice: "10",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "missiRoti",
                               image: "/https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/missiRoti.avif",
                              title: "Missi Roti",
                               rating: "3.9",
                                realPrice: "30",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "lachchaPrantha",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/lachchaParantha.avif",
                              title: "Lachcha Parantha",
                               rating: "4.4",
                                realPrice: "25",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "alooParantya",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/alooParantha.avif",
                              title: "Aloo Parantha",
                               rating: "4.2",
                                realPrice: "30",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "paneerParantha",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/paneerParantha.avif",
                              title: "Paneer Parantha",
                               rating: "4.6",
                                realPrice: "45",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "plainNaan",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/plainNaan.avif",
                              title: "Plain Naan",
                               rating: "4.5",
                                realPrice: "40",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "butterNaan",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/butterNaan.avif",
                              title: "Butter Naan",
                               rating: "4.9",
                                realPrice: "55",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "garlicNaan",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/garlicNaan.avif",
                              title: "Garlic Naan",
                               rating: "4.6",
                                realPrice: "65",
                                discount: "5",
                                isVeg: true
                    },	
                    {
                        id: "alooNaan",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/alooNaan.avif",
                              title: "Aloo Naan",
                               rating: "4.3",
                                realPrice: "65",
                                discount: "5",
                                isVeg: true
                    },	
                    {
                        id: "paneerNaan",
                               image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/paneerNaan.avif",
                              title: "Paneer Naan",
                               rating: "4.5",
                                realPrice: "70",
                                discount: "5",
                                isVeg: true
                    },
                    {
                        id: "churChurNaan",
                            image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/churChurNaan.jpeg",
                            title: "Chur Chur Naan",
                            rating: "4.2",
                            realPrice: "75",
                            discount: "5",
                            isVeg: true
                    },
                    {
                        id: "cheeseNaan",
                            image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/breads/cheeseNaan.avif",
                            title: "Cheese Naan",
                            rating: "4.7",
                            realPrice: "85",
                            discount: "5",
                            isVeg: true
                    }
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