// _id: {type: String},
// brandName: {type: String},
// brandAbout: {type: String},
// brandColor: {type: String},
// brandLogo: {type: String},
// brandImage: {type: String},
// brandData: {type: Array}

// const cardsData = [
//     {
//         logo: "/static/logos/dunkinDonutsLogo.svg",
//         name: "Dunkin Donuts",
//         bgColor: "#cb0879",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     },
//     {
//         logo: "/static/logos/burgerKingLogo.svg",
//         name: "Burger King",
//         bgColor: "#0066b4",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     },
//     {
//         logo: "/static/logos/kfcLogo.svg",
//         name: "Kfc",
//         bgColor: "#9b2e35",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     },
//     {
//         logo: "/static/logos/dominosLogo.svg",
//         name: "Domino's",
//         bgColor: "#0074ad",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     },
//     {
//         logo: "/static/logos/subwayLogo.svg",
//         name: "Subway",
//         bgColor: "#009743",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     },
//     {
//         logo: "/static/logos/cafeCoffeeDayLogo.svg",
//         name: "Cafe Coffee Day",
//         bgColor: "#c4002b",
//         content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
//     }
// ];

// let starbucks = {
//     _id: "sta",
//     brandName: "Starbucks", 
//     brandAbout: "Starbucks is one of the best brand of drinks chain that provide best and most amazing drinks including Cold and Hot coffees. One howl provides all the hot and cold ranges of starbucks coffee.",
//     brandColor: "#0d6e31",
//     brandLogo: "/logos/starbucksLogo.svg",
//     brandImage: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/brands/pizzaHut.jpeg",
//     brandData: [
//         {
//             image: "/starbucks/cold1.jpg",
//             title: "Cold Brew",
//             rating: "4.4",
//             realPrice: "89",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/cold2.jpg",
//             title: "Vanilla Sweet Cream",
//             rating: "4.0",
//             realPrice: "109",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/cold3.jpg",
//             title: "Iced Caffe Mocha",
//             rating: "4.7",
//             realPrice: "149",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/cold4.jpg",
//             title: "Iced Caramel Macchiato",
//             rating: "4.5",
//             realPrice: "189",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/cold5.jpg",
//             title: "Iced Pumpkin Latte",
//             rating: "3.9",
//             realPrice: "219",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/cold6.jpg",
//             title: "Nitro Cold Brew",
//             rating: "4.5",
//             realPrice: "249",
//             discount: "8",
//             category: "cold"
//         },
//         {
//             image: "/starbucks/hot1.jpg",
//             title: "Veranda Blend",
//             rating: "4.2",
//             realPrice: "69",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/starbucks/hot2.jpg",
//             title: "Caffe Misto",
//             rating: "4.0",
//             realPrice: "89",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/starbucks/hot3.png",
//             title: "Caramel Macchiato",
//             rating: "4.5",
//             realPrice: "119",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/starbucks/hot4.jpg",
//             title: "Flat White",
//             rating: "4.3",
//             realPrice: "149",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/starbucks/hot5.jpg",
//             title: "Decaf Roast",
//             rating: "4.6",
//             realPrice: "159",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/starbucks/hot6.jpg",
//             title: "Cinnmon Dolce Latte",
//             rating: "4.8",
//             realPrice: "219",
//             discount: "8",
//             category: "hot"
//         },
//         {
//             image: "/beverages/cocoCola.jpeg",
//             title: "Coca Cola (600ml)",
//             rating: "4.5",
//             realPrice: "69",
//             discount: "0",
//             category: "beverage"
//         },
//         {
//             image: "/beverages/fanta.jpeg",
//             title: "Fanta (600ml)",
//             rating: "4.2",
//             realPrice: "59",
//             discount: "0",
//             category: "beverage"
//         },
//         {
//             image: "/beverages/cocoCola.jpeg",
//             title: "Sprite (600ml)",
//             rating: "4.7",
//             realPrice: "79",
//             discount: "0",
//             category: "beverage"
//         }
//     ]
// }

// let pizzaHut = {
//     _id: "piz",
//     brandName: "Pizza Hut", 
//     brandAbout: "Pizza Hut is one of the best brand of fast food chain that provide best and most amazing pizzas. One howl provides all the veg and non-veg ranges of pizza hut pizzas.",
//     brandColor: "#ee1c23",
//     brandLogo: "/logos/pizzaHutLogo.svg",
//     brandImage: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/brands/pizzaHut.jpeg",
//     brandData: [
//         {
//             image: "/pizzaHut/veg1.png",
//             title: "Margherita",
//             rating: "4.8",
//             realPrice: "159",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg2.jpg",
//             title: "Tomato Special",
//             rating: "4.0",
//             realPrice: "179",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg3.jpg",
//             title: "Veggie Special",
//             rating: "4.2",
//             realPrice: "249",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg4.jpeg",
//             title: "Veg Kabab Special",
//             rating: "3.9",
//             realPrice: "269",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg5.jpg",
//             title: "Classic Sause",
//             rating: "4.1",
//             realPrice: "219",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg6.jpg",
//             title: "Chaap Classic",
//             rating: "3.8",
//             realPrice: "174",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/veg7.jpg",
//             title: "Veg Supreme",
//             rating: "4.8",
//             realPrice: "349",
//             discount: "5",
//             category: "veg"
//         },
//         {
//             image: "/pizzaHut/nonVeg1.jpg",
//             title: "Classic Sausage",
//             rating: "4.2",
//             realPrice: "259",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg2.jpg",
//             title: "Italian Pepperoni",
//             rating: "3.9",
//             realPrice: "289",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg3.png",
//             title: "Tandoori Tikka",
//             rating: "4.2",
//             realPrice: "309",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg4.png",
//             title: "Classic Loaded Chicken",
//             rating: "4.6",
//             realPrice: "329",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg5.jpg",
//             title: "Chicken Farmers Pizza",
//             rating: "4.8",
//             realPrice: "369",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg6.jpg",
//             title: "Malai Chicken Pizza",
//             rating: "4.4",
//             realPrice: "399",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/pizzaHut/nonVeg7.png",
//             title: "Triple Chicken Feast",
//             rating: "4.4",
//             realPrice: "439",
//             discount: "5",
//             category: "nonVeg"
//         },
//         {
//             image: "/beverages/cocoCola.jpeg",
//             title: "Coca Cola (600ml)",
//             rating: "4.5",
//             realPrice: "69",
//             discount: "0",
//             category: "beverage"
//         },
//         {
//             image: "/beverages/fanta.jpeg",
//             title: "Fanta (600ml)",
//             rating: "4.2",
//             realPrice: "59",
//             discount: "0",
//             category: "beverage"
//         },
//         {
//             image: "/beverages/cocoCola.jpeg",
//             title: "Sprite (600ml)",
//             rating: "4.7",
//             realPrice: "79",
//             discount: "0",
//             category: "beverage"
//         }
//     ]
// }

// let mcDonalds = {
//     _id: "mcd",
//    brandName: "Mc Donald's", 
//    brandAbout: "Mc Donalds is one of the most famous brand fast food brand in India. One howl partnered with Mc Donalds provides alomost all the products made by Mc Donalds.",
//    brandColor: "#f1bb01",
//    brandLogo: "/logos/mcDonaldsLogo.svg",
//     brandImage: "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/brands/mcDonals.jpg",
//     brandData: [
//         {
//             id: "mcAloo",
//             image: "/mcDonalds/veg1.png",
//             title: "McAloo Tikki",
//             rating: "4.5",
//             realPrice: "54",
//             discount: "5",
//             category: "veg",
//             ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Potato patty and many more."
//         },
//         {
//             id: "mcVeggie",
//             image: "/mcDonalds/veg2.png",
//             title: "McVeggie",
//             rating: "4.2",
//             realPrice: "98",
//             discount: "5",
//             category: "veg",
//             ingredients: "Fresh Buns, Onions, Tomatoes, Capsicum, Peas, Cheese, Potato patty and many more."
//         },
//         {
//             id: "mcSpicy",
//             image: "/mcDonalds/veg3.png",
//             title: "McSpicy Paneer",
//             rating: "4.7",
//             realPrice: "170",
//             discount: "5",
//             category: "veg",
//             ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Paneer, Chilli, Potato patty and many more."
//         },
//         {
//             id: "schezwan",
//             image: "/mcDonalds/veg4.png",
//             title: "Schezwan Veg Burger",
//             rating: "3.9",
//             realPrice: "70",
//             discount: "5",
//             category: "veg",
//             ingredients: "Fresh Buns, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potato patty and many more."
//         },
//         {
//             id: "nuggets",
//             image: "/mcDonalds/nuggets.png",
//             title: "Veg Nuggets",
//             rating: "4.2",
//             realPrice: "179",
//             discount: "5",
//             category: "veg",
//             ingredients: "Paneer, Various sauses, Garli Paste, Red Chilli and many more."
//         },
//         {
//             id: "smallFries",
//             image: "/mcDonalds/fries.png",
//             title: "French Fries (Small)",
//             rating: "4.7",
//             realPrice: "89",
//             discount: "5",
//             category: "veg",
//             ingredients: "Potatoes, Various spices and many more."
//         },
//         {
//             id: "mediumFries",
//             image: "/mcDonalds/fries.png",
//             title: "French Fries (Medium)",
//             rating: "4.9",
//             realPrice: "149",
//             discount: "5",
//             category: "veg",
//             ingredients: "Potatoes, Various spices and many more."
//         },
//         {
//             id: "largeFries",
//             image: "/mcDonalds/fries.png",
//             title: "French Fries (Large)",
//             rating: "4.9",
//             realPrice: "199",
//             discount: "5",
//             category: "veg",
//             ingredients: "Potatoes, Various spices and many more."
//         },
//         {
//             id: "vegCombo",
//             image: "/mcDonalds/vegCombo.png",
//             title: "McAloo Tikki Combo",
//             rating: "4.4",
//             realPrice: "289",
//             discount: "5",
//             category: "veg",
//             ingredients: "McAloo Tikki, Medium French Fries and Coca Cola (600l)."
//         },
//         {
//             id: "happyMeal",
//             image: "/mcDonalds/vegHappyMeal.png",
//             title: "Happy Meal",
//             rating: "4.5",
//             realPrice: "367",
//             discount: "5",
//             category: "veg",
//             ingredients: "McAloo Tikki, Medium French Fries, Coca Cola (600l) and A Special 3d Superman Toy."
//         },
//         {
//             id: "mcChicken",
//             image: "/mcDonalds/nonVeg1.png",
//             title: "McChicken",
//             rating: "4.2",
//             realPrice: "109",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fresh Buns, Chicken Patty, Tomatoes, Onions and many more."
//         },
//         {
//             id: "mcSpicyNonVeg",
//             image: "/mcDonalds/nonVeg2.png",
//             title: "McSpicy Chicken",
//             rating: "3.9",
//             realPrice: "173",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fresh Buns, Chicken patty, Onions, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
//         },
//         {
//             id: "mcChickenSpecial",
//             image: "/mcDonalds/nonVeg3.png",
//             title: "McChicken Special",
//             rating: "4.2",
//             realPrice: "139",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fresh Buns, Chicken patty, Onions, Cheese, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
//         },
//         {
//             id: "schezwanNonVeg",
//             image: "/mcDonalds/nonVeg4.png",
//             title: "Schezwan Non-Veg Burger",
//             rating: "4.6",
//             realPrice: "89",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fresh Buns, Chicken patty, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potatoes and many more."
//         },
//         {
//             id: "mcGrill",
//             image: "/mcDonalds/nonVeg5.png",
//             title: "Chicken McGrill",
//             rating: "4.8",
//             realPrice: "129",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fresh Buns, Chicken grilled patty, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potatoes and many more."
//         },
//         {
//             id: "nonVegNuggets",
//             image: "/mcDonalds/nuggets.png",
//             title: "Chicken Nuggets",
//             rating: "4.5",
//             realPrice: "189",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "Fried Chicken, various sauses, Garli Paste, Red Chilli and many more."
//         },
//         {
//             id: "nonVegCombo",
//             image: "/mcDonalds/nonVegCombo.png",
//             title: "Chicken Tikki Combo",
//             rating: "4.3",
//             realPrice: "219",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "McChicken, Medium Chicken Nuggets and Sprite (600l)."
//         },
//         {
//             id: "happyMealNonVeg",
//             image: "/mcDonalds/nonVegHappyMeal.png",
//             title: "Non-Veg Happy Meal",
//             rating: "4.4",
//             realPrice: "359",
//             discount: "5",
//             category: "nonVeg",
//             ingredients: "McChicken, Medium Chicken Nuggets and Sprite (600l).and A Special 3d Batman Toy."
//         },
//         {
//             id: "cheeseDanish",
//             image: "/mcDonalds/desert1.png",
//             title: "Cheese Danish",
//             rating: "4.4",
//             realPrice: "109",
//             discount: "5",
//             category: "desert",
//             ingredients: "Cheese, Sugar coated bun and many more."
//         },
//         {
//             id: "appleFritter",
//             image: "/mcDonalds/desert2.png",
//             title: "Apple Fritter",
//             rating: "4.2",
//             realPrice: "129",
//             discount: "5",
//             category: "desert",
//             ingredients: "Apple pieces, Various liquid sweets and many more."
//         },
//         {
//             id: "muffin",
//             image: "/mcDonalds/desert3.png",
//             title: "Bluebrry Muffin",
//             rating: "4.6",
//             realPrice: "149",
//             discount: "5",
//             category: "desert",
//             ingredients: "Blueberry pieces, Baked Bun and many more."
//         },
//         {
//             id: "cinnamonRoll",
//             image: "/mcDonalds/desert4.png",
//             title: "Cinnamon Roll",
//             rating: "4.5",
//             realPrice: "139",
//             discount: "5",
//             category: "desert",
//             ingredients: "Cinnamon, Baked Bun and many more."
//         },
//         {
//             id: "mocha",
//             image: "/mcDonalds/drink1.png",
//             title: "Mocha",
//             rating: "4.4",
//             realPrice: "109",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "latte",
//             image: "/mcDonalds/drink2.png",
//             title: "Caremal Latte",
//             rating: "4.2",
//             realPrice: "129",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "roastCoffee",
//             image: "/mcDonalds/drink3.png",
//             title: "Roast Coffee",
//             rating: "4.1",
//             realPrice: "89",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "icedLatte",
//             image: "/mcDonalds/drink4.png",
//             title: "Iced Caremal Latte",
//             rating: "4.5",
//             realPrice: "159",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "icedMacchiato",
//             image: "/mcDonalds/drink5.png",
//             title: "Iced Caremal Macchiato",
//             rating: "4.8",
//             realPrice: "199",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "frappe",
//             image: "/mcDonalds/drink6.png",
//             title: "Mocha Frappe",
//             rating: "4.7",
//             realPrice: "229",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "smothie",
//             image: "/mcDonalds/drink7.png",
//             title: "Mango Smothie",
//             rating: "4.6",
//             realPrice: "249",
//             discount: "5",
//             category: "drink"
//         },
//         {
//             id: "cocaCola",
//             image: "/beverages/drink1.jpeg",
//             title: "Coca Cola (600ml)",
//             rating: "4.5",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "fanta",
//             image: "/beverages/drink2.jpeg",
//             title: "Fanta (600ml)",
//             rating: "4.2",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "melonSlushi",
//             image: "/beverages/drink3.png",
//             title: "Watermelon Slushi (600ml)",
//             rating: "4.7",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "pepper",
//             image: "/beverages/drink4.png",
//             title: "Dr. Pepper (600ml)",
//             rating: "4.5",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "sweetTea",
//             image: "/beverages/drink5.png",
//             title: "Sweet Tea (600ml)",
//             rating: "4.3",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "mangoSlushi",
//             image: "/beverages/drink6.png",
//             title: "Mango Slushi (600ml)",
//             rating: "4.4",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//         {
//             id: "sprite",
//             image: "/beverages/drink7.jpeg",
//             title: "Sprite (600ml)",
//             rating: "4.1",
//             realPrice: "79",
//             discount: "0",
//             category: "drink"
//         },
//     ]
// }

const m = {
    burgers: [
        {
            id: "mcAloo",
            image: "/mcDonalds/veg1.png",
            title: "McAloo Tikki",
            rating: "4.5",
            realPrice: "54",
            discount: "5",
            category: "veg",
            ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Potato patty and many more."
        },
        {
            id: "mcVeggie",
            image: "/mcDonalds/veg2.png",
            title: "McVeggie",
            rating: "4.2",
            realPrice: "98",
            discount: "5",
            category: "veg",
            ingredients: "Fresh Buns, Onions, Tomatoes, Capsicum, Peas, Cheese, Potato patty and many more."
        },
        {
            id: "mcSpicy",
            image: "/mcDonalds/veg3.png",
            title: "McSpicy Paneer",
            rating: "4.7",
            realPrice: "170",
            discount: "5",
            category: "veg",
            ingredients: "Fresh Buns, Onions, Tomatoes, Peas, Paneer, Chilli, Potato patty and many more."
        },
        {
            id: "schezwan",
            image: "/mcDonalds/veg4.png",
            title: "Schezwan Veg Burger",
            rating: "3.9",
            realPrice: "70",
            discount: "5",
            category: "veg",
            ingredients: "Fresh Buns, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potato patty and many more."
        },
        {
            id: "mcChicken",
            image: "/mcDonalds/nonVeg1.png",
            title: "McChicken",
            rating: "4.2",
            realPrice: "109",
            discount: "5",
            category: "nonVeg",
            ingredients: "Fresh Buns, Chicken Patty, Tomatoes, Onions and many more."
        },
        {
            id: "mcSpicyNonVeg",
            image: "/mcDonalds/nonVeg2.png",
            title: "McSpicy Chicken",
            rating: "3.9",
            realPrice: "173",
            discount: "5",
            category: "nonVeg",
            ingredients: "Fresh Buns, Chicken patty, Onions, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
        },
        {
            id: "mcChickenSpecial",
            image: "/mcDonalds/nonVeg3.png",
            title: "McChicken Special",
            rating: "4.2",
            realPrice: "139",
            discount: "5",
            category: "nonVeg",
            ingredients: "Fresh Buns, Chicken patty, Onions, Cheese, Tomatoes, Peas, Paneer, Chilli, Potatoes and many more."
        },
        {
            id: "schezwanNonVeg",
            image: "/mcDonalds/nonVeg4.png",
            title: "Schezwan Non-Veg Burger",
            rating: "4.6",
            realPrice: "89",
            discount: "5",
            category: "nonVeg",
            ingredients: "Fresh Buns, Chicken patty, Onions, Schezwan Sause, Cheese, Tomatoes, Peas, Potatoes and many more."
        },
        {
            id: "mcGrill",
            image: "/mcDonalds/nonVeg5.png",
            title: "Chicken McGrill",
            rating: "4.8",
            realPrice: "129",
            discount: "5",
            category: "nonVeg",
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
            category: "veg",
            ingredients: "Potatoes, Various spices and many more."
        },
        {
            id: "mediumFries",
            image: "/mcDonalds/fries.png",
            title: "French Fries (Medium)",
            rating: "4.9",
            realPrice: "149",
            discount: "5",
            category: "veg",
            ingredients: "Potatoes, Various spices and many more."
        },
        {
            id: "largeFries",
            image: "/mcDonalds/fries.png",
            title: "French Fries (Large)",
            rating: "4.9",
            realPrice: "199",
            discount: "5",
            category: "veg",
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
            category: "veg",
            ingredients: "Paneer, Various sauses, Garli Paste, Red Chilli and many more."
        },
        {
            id: "nonVegNuggets",
            image: "/mcDonalds/nuggets.png",
            title: "Chicken Nuggets",
            rating: "4.5",
            realPrice: "189",
            discount: "5",
            category: "nonVeg",
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
            category: "veg",
            ingredients: "McAloo Tikki, Medium French Fries and Coca Cola (600l)."
        },
        {
            id: "happyMeal",
            image: "/mcDonalds/vegHappyMeal.png",
            title: "Happy Meal",
            rating: "4.5",
            realPrice: "367",
            discount: "5",
            category: "veg",
            ingredients: "McAloo Tikki, Medium French Fries, Coca Cola (600l) and A Special 3d Superman Toy."
        },
        {
            id: "nonVegCombo",
            image: "/mcDonalds/nonVegCombo.png",
            title: "Chicken Tikki Combo",
            rating: "4.3",
            realPrice: "219",
            discount: "5",
            category: "nonVeg",
            ingredients: "McChicken, Medium Chicken Nuggets and Sprite (600l)."
        },
        {
            id: "happyMealNonVeg",
            image: "/mcDonalds/nonVegHappyMeal.png",
            title: "Non-Veg Happy Meal",
            rating: "4.4",
            realPrice: "359",
            discount: "5",
            category: "nonVeg",
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
            category: "veg",
            ingredients: "Cheese, Sugar coated bun and many more."
        },
        {
            id: "appleFritter",
            image: "/mcDonalds/dessert2.png",
            title: "Apple Fritter",
            rating: "4.2",
            realPrice: "129",
            discount: "5",
            category: "veg",
            ingredients: "Apple pieces, Various liquid sweets and many more."
        },
        {
            id: "muffin",
            image: "/mcDonalds/dessert3.png",
            title: "Bluebrry Muffin",
            rating: "4.6",
            realPrice: "149",
            discount: "5",
            category: "veg",
            ingredients: "Blueberry pieces, Baked Bun and many more."
        },
        {
            id: "cinnamonRoll",
            image: "/mcDonalds/dessert4.png",
            title: "Cinnamon Roll",
            rating: "4.5",
            realPrice: "139",
            discount: "5",
            category: "veg",
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
            category: "veg"
        },
        {
            id: "latte",
            image: "/mcDonalds/drink2.png",
            title: "Caremal Latte",
            rating: "4.2",
            realPrice: "129",
            discount: "5",
            category: "veg"
        },
        {
            id: "roastCoffee",
            image: "/mcDonalds/drink3.png",
            title: "Roast Coffee",
            rating: "4.1",
            realPrice: "89",
            discount: "5",
            category: "veg"
        },
        {
            id: "icedLatte",
            image: "/mcDonalds/drink4.png",
            title: "Iced Caremal Latte",
            rating: "4.5",
            realPrice: "159",
            discount: "5",
            category: "veg"
        },
        {
            id: "icedMacchiato",
            image: "/mcDonalds/drink5.png",
            title: "Iced Caremal Macchiato",
            rating: "4.8",
            realPrice: "199",
            discount: "5",
            category: "veg"
        },
        {
            id: "frappe",
            image: "/mcDonalds/drink6.png",
            title: "Mocha Frappe",
            rating: "4.7",
            realPrice: "229",
            discount: "5",
            category: "veg"
        },
        {
            id: "smothie",
            image: "/mcDonalds/drink7.png",
            title: "Mango Smothie",
            rating: "4.6",
            realPrice: "249",
            discount: "5",
            category: "veg"
        },
        {
            id: "cocaCola",
            image: "/beverages/drink1.jpeg",
            title: "Coca Cola (600ml)",
            rating: "4.5",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "fanta",
            image: "/beverages/drink2.jpeg",
            title: "Fanta (600ml)",
            rating: "4.2",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "melonSlushi",
            image: "/beverages/drink3.png",
            title: "Watermelon Slushi (600ml)",
            rating: "4.7",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "pepper",
            image: "/beverages/drink4.png",
            title: "Dr. Pepper (600ml)",
            rating: "4.5",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "sweetTea",
            image: "/beverages/drink5.png",
            title: "Sweet Tea (600ml)",
            rating: "4.3",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "mangoSlushi",
            image: "/beverages/drink6.png",
            title: "Mango Slushi (600ml)",
            rating: "4.4",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
        {
            id: "sprite",
            image: "/beverages/drink7.jpeg",
            title: "Sprite (600ml)",
            rating: "4.1",
            realPrice: "79",
            discount: "5",
            category: "veg"
        },
    ] 
}


