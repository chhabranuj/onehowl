import clientPromise from "../../lib/mongodb";
import ProductModel from "../../models/productModel";

const AddProductData = async (req, res) => {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const productCollection = database.collection("productCollection");
        const data = {
                _id: "mcd",
                brandImage: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/brands/mcDonals.jpg",
                productData: {
                    burgers: [
                        {
                            id: "mcAloo",
                            image: "/mcDonalds/veg1.png",
                            title: "McAloo Tikki",
                            rating: "4.5",
                            realPrice: "54",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Potato patty and many more."
                        },
                        {
                            id: "mcVeggie",
                            image: "/mcDonalds/veg2.png",
                            title: "McVeggie",
                            rating: "4.2",
                            realPrice: "98",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Fresh Buns, Onions, Tomatoes, Capsicum, Peas, Cheese, Potato patty and many more."
                        },
                        {
                            id: "mcSpicy",
                            image: "/mcDonalds/veg3.png",
                            title: "McSpicy Paneer",
                            rating: "4.7",
                            realPrice: "170",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Paneer, Chilli, Potato patty and many more."
                        },
                        {
                            id: "schezwan",
                            image: "/mcDonalds/veg4.png",
                            title: "Schezwan Veg Burger",
                            rating: "3.9",
                            realPrice: "70",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Fresh Buns, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potato patty and many more."
                        },
                        {
                            id: "mcChicken",
                            image: "/mcDonalds/nonVeg1.png",
                            title: "McChicken",
                            rating: "4.2",
                            realPrice: "109",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fresh Buns, Chicken Patty, Tomatoes, Onions and many more."
                        },
                        {
                            id: "mcSpicyNonVeg",
                            image: "/mcDonalds/nonVeg2.png",
                            title: "McSpicy Chicken",
                            rating: "3.9",
                            realPrice: "173",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fresh Buns, Chicken patty, Onions, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
                        },
                        {
                            id: "mcChickenSpecial",
                            image: "/mcDonalds/nonVeg3.png",
                            title: "McChicken Special",
                            rating: "4.2",
                            realPrice: "139",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fresh Buns, Chicken patty, Onions, Cheese, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
                        },
                        {
                            id: "schezwanNonVeg",
                            image: "/mcDonalds/nonVeg4.png",
                            title: "Schezwan Non-Veg Burger",
                            rating: "4.6",
                            realPrice: "89",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fresh Buns, Chicken patty, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potatoes and many more."
                        },
                        {
                            id: "mcGrill",
                            image: "/mcDonalds/nonVeg5.png",
                            title: "Chicken McGrill",
                            rating: "4.8",
                            realPrice: "129",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fresh Buns, Chicken grilled patty, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potatoes and many more."
                        },
                    ],
                    fries: [
                        {
                            id: "smallFries",
                            image: "/mcDonalds/fries.png",
                            title: "French Fries (Small)",
                            rating: "4.7",
                            realPrice: "89",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Potatoes, Various spices and many more."
                        },
                        {
                            id: "mediumFries",
                            image: "/mcDonalds/fries.png",
                            title: "French Fries (Medium)",
                            rating: "4.9",
                            realPrice: "149",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Potatoes, Various spices and many more."
                        },
                        {
                            id: "largeFries",
                            image: "/mcDonalds/fries.png",
                            title: "French Fries (Large)",
                            rating: "4.9",
                            realPrice: "199",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Potatoes, Various spices and many more."
                        }
                    ],
                    nuggets: [
                        {
                            id: "nuggets",
                            image: "/mcDonalds/nuggets.png",
                            title: "Veg Nuggets",
                            rating: "4.2",
                            realPrice: "179",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Paneer, Various sauses, Garli Paste, Red Chilli and many more."
                        },
                        {
                            id: "nonVegNuggets",
                            image: "/mcDonalds/nuggets.png",
                            title: "Chicken Nuggets",
                            rating: "4.5",
                            realPrice: "189",
                            discount: "5",
                            isVeg: false,
                            ingredients: "Fried Chicken, various sauses, Garli Paste, Red Chilli and many more."
                        }
                    ],
                    combos: [
                        {
                            id: "vegCombo",
                            image: "/mcDonalds/vegCombo.png",
                            title: "McAloo Tikki Combo",
                            rating: "4.4",
                            realPrice: "289",
                            discount: "5",
                            isVeg: true,
                            ingredients: "McAloo Tikki, Medium French Fries and Coca Cola (600l)."
                        },
                        {
                            id: "happyMeal",
                            image: "/mcDonalds/vegHappyMeal.png",
                            title: "Happy Meal",
                            rating: "4.5",
                            realPrice: "367",
                            discount: "5",
                            isVeg: true,
                            ingredients: "McAloo Tikki, Medium French Fries, Coca Cola (600l) and A Special 3d Superman Toy."
                        },
                        {
                            id: "nonVegCombo",
                            image: "/mcDonalds/nonVegCombo.png",
                            title: "Chicken Tikki Combo",
                            rating: "4.3",
                            realPrice: "219",
                            discount: "5",
                            isVeg: false,
                            ingredients: "McChicken, Medium Chicken Nuggets and Sprite (600l)."
                        },
                        {
                            id: "happyMealNonVeg",
                            image: "/mcDonalds/nonVegHappyMeal.png",
                            title: "Non-Veg Happy Meal",
                            rating: "4.4",
                            realPrice: "359",
                            discount: "5",
                            isVeg: false,
                            ingredients: "McChicken, Medium Chicken Nuggets and Sprite (600l).and A Special 3d Batman Toy."
                        }
                    ],
                    desserts: [
                        {
                            id: "cheeseDanish",
                            image: "/mcDonalds/dessert1.png",
                            title: "Cheese Danish",
                            rating: "4.4",
                            realPrice: "109",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Cheese, Sugar coated bun and many more."
                        },
                        {
                            id: "appleFritter",
                            image: "/mcDonalds/dessert2.png",
                            title: "Apple Fritter",
                            rating: "4.2",
                            realPrice: "129",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Apple pieces, Various liquid sweets and many more."
                        },
                        {
                            id: "muffin",
                            image: "/mcDonalds/dessert3.png",
                            title: "Bluebrry Muffin",
                            rating: "4.6",
                            realPrice: "149",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Blueberry pieces, Baked Bun and many more."
                        },
                        {
                            id: "cinnamonRoll",
                            image: "/mcDonalds/dessert4.png",
                            title: "Cinnamon Roll",
                            rating: "4.5",
                            realPrice: "139",
                            discount: "5",
                            isVeg: true,
                            ingredients: "Cinnamon, Baked Bun and many more."
                        }
                    ],
                    drinks: [
                        {
                            id: "mocha",
                            image: "/mcDonalds/drink1.png",
                            title: "Mocha",
                            rating: "4.4",
                            realPrice: "109",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "latte",
                            image: "/mcDonalds/drink2.png",
                            title: "Caremal Latte",
                            rating: "4.2",
                            realPrice: "129",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "roastCoffee",
                            image: "/mcDonalds/drink3.png",
                            title: "Roast Coffee",
                            rating: "4.1",
                            realPrice: "89",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "icedLatte",
                            image: "/mcDonalds/drink4.png",
                            title: "Iced Caremal Latte",
                            rating: "4.5",
                            realPrice: "159",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "icedMacchiato",
                            image: "/mcDonalds/drink5.png",
                            title: "Iced Caremal Macchiato",
                            rating: "4.8",
                            realPrice: "199",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "frappe",
                            image: "/mcDonalds/drink6.png",
                            title: "Mocha Frappe",
                            rating: "4.7",
                            realPrice: "229",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "smothie",
                            image: "/mcDonalds/drink7.png",
                            title: "Mango Smothie",
                            rating: "4.6",
                            realPrice: "249",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "cocaCola",
                            image: "/beverages/drink1.jpeg",
                            title: "Coca Cola (600ml)",
                            rating: "4.5",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "fanta",
                            image: "/beverages/drink2.jpeg",
                            title: "Fanta (600ml)",
                            rating: "4.2",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "melonSlushi",
                            image: "/beverages/drink3.png",
                            title: "Watermelon Slushi (600ml)",
                            rating: "4.7",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "pepper",
                            image: "/beverages/drink4.png",
                            title: "Dr. Pepper (600ml)",
                            rating: "4.5",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "sweetTea",
                            image: "/beverages/drink5.png",
                            title: "Sweet Tea (600ml)",
                            rating: "4.3",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "mangoSlushi",
                            image: "/beverages/drink6.png",
                            title: "Mango Slushi (600ml)",
                            rating: "4.4",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                        {
                            id: "sprite",
                            image: "/beverages/drink7.jpeg",
                            title: "Sprite (600ml)",
                            rating: "4.1",
                            realPrice: "79",
                            discount: "5",
                            isVeg: true
                        },
                    ] 
                }
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