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
                                    isVeg: false,
                    info: {
                                about: "Butter chicken, traditionally known as murgh makhani, is an Indian dish. It is a type of curry made from chicken with a spiced tomato and butter sauce.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Butter, Chicken, Spices",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "chickenTikka",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenTikka.avif",
                                  title: "Chicken Tikka",
                                   rating: "4.2",
                                    realPrice: "300",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Chicken Tikka are boneless pieces of chicken, marinated in spiced yogurt, threaded on a metal skewer and cooked on live charcoal.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken, Yogurt , Spices",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "chickenYakhni",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenYakhni.avif",
                                  title: "Chicken Yakhni",
                                   rating: "4.3",
                                    realPrice: "290",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Chicken Yakhni is known for its various chicken preparations, cooked meticulously using a range of spices and flavouring agents.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken, Spices",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "chickenKorma",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenKorma.avif",
                                  title: "Chicken Korma",
                                   rating: "4.0",
                                    realPrice: "260",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: " Chicken Korma or qorma is a dish consisting of meat or vegetables braised with yogurt, water or stock, and spices to produce a thick sauce or gravy.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken, Cream, Coconut Milk ",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "kadaiChicken",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/kadaiChicken.avif",
                                  title: "Kadai Chicken",
                                   rating: "4.4",
                                    realPrice: "320",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Kadai Chicken is a delicious, spicy & flavoured dish made with chicken, onions, tomatoes, ginger, garlic & fresh ground spices known as kadai masala.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "chickenLababdar",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenLababdar.avif",
                                  title: "Chicken Lababdar",
                                   rating: "4.8",
                                    realPrice: "350",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Chicken Lababdar is a  chicken recipe that can be made using boneless chicken pieces, onions, tomatoes, cream, ginger, butter, mustard oil, salt, cumin etc",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Boneless Chicken",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "chickenDoPyaza",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/chickenDoPyaza.jpeg",
                                  title: "Chicken Do Pyazar",
                                   rating: "4.5",
                                    realPrice: "320",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Chicken Do Pyaaza is a delight for chicken lovers! Marinated chicken chunks cooked in a variety of spices, yogurt and kasoori methi." ,
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken, Onions",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "hariyaliChicken",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/haryaliChicken.webp",
                                  title: "Hariyali Chicken",
                                   rating: "4.6",
                                    realPrice: "300",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Haryali Chicken or green chicken s a delicious Indian dish made with chicken, fresh aromatic herbs and spices",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Chicken & Aromatic Herbs",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "eggCurry",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/eggCurry.avif",
                                  title: "Egg Curry",
                                   rating: "4.3",
                                    realPrice: "180",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Egg Curry is a succulent curry of boiled eggs, spruced up with a pungent paste of tomatoes, onions  and a splash of spice powders and spice-mixes. ",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Egg",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "eggBhurji",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/eggBhurji.avif",
                                  title: "Egg Bhurji",
                                   rating: "4.0",
                                    realPrice: "200",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Egg bhurji is an Indian dish made by scrambling eggs & cooking with spices. It is the Indian version of scrambled eggs. ",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Egg",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "muttonKebab",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonKebab.avif",
                                  title: "Mutton Kebab",
                                   rating: "4.1",
                                    realPrice: "240",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Mutton Seekh Kabab is ground or minced mutton (goat or lamb meat) that's mixed & flavored with few aromatic spices & herbs.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Mutton",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "muttonJosh",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonJosh.avif",
                                  title: "Mutton Josh",
                                   rating: "4.6",
                                    realPrice: "290",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Mutton Josh is scrumptious delicacy from the Kashmiri cuisine distinguished by its thick, aromatic, flavourful red sauce and tender meat.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Mutton",
                            quantity: "Per Plate"
                            }
                        },
                        {
                            id: "muttonCurry",
                                   image: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/nonVeg/muttonCurry.avif",
                                  title: "Mutton Curry",
                                   rating: "4.7",
                                    realPrice: "340",
                                    discount: "5",
                                    isVeg: false,
                    info: {
                                about: "Mutton Curry also known as Mutton Masala or Mutton Gravy is a delicious Indian curried dish of soft tender chunks of meat in a spicy onion tomato gravy.",
                                course: "Main",
                                servingTemperature: "Hot",
                                mainIngredient: "Mutton, Cream",
                            quantity: "Per Plate"
                            }
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