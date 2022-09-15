import brandsLayoutStyle from "./brandsLayout.module.css";
import BrandsCardLayout from "../brandsCardLayout/brandCardLayout";

const BrandsLayout = () => {
    const cardsData = [
        {
            logo: "/static/logos/mcDonaldsLogo.svg",
            name: "Mc Donald's",
            bgColor: "#f1bb01",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/pizzaHutLogo.svg",
            name: "Pizza Hut",
            bgColor: "#ee1c23",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/starbucksLogo.svg",
            name: "Starbucks",
            bgColor: "#0d6e31",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/dunkinDonutsLogo.svg",
            name: "Dunkin Donuts",
            bgColor: "#cb0879",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/burgerKingLogo.svg",
            name: "Burger King",
            bgColor: "#0066b4",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/kfcLogo.svg",
            name: "Kfc",
            bgColor: "#9b2e35",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/dominosLogo.svg",
            name: "Domino's",
            bgColor: "#0074ad",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/subwayLogo.svg",
            name: "Subway",
            bgColor: "#009743",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        },
        {
            logo: "/static/logos/cafeCoffeeDayLogo.svg",
            name: "Cafe Coffee Day",
            bgColor: "#c4002b",
            content: "One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 10 international brands like Mc Donald's, Pizza Hut, Starbucks and many more."
        }
    ]

    return (
        <div className={brandsLayoutStyle.brandsParent}>
            <p className={brandsLayoutStyle.title}>Brands</p>
            <input placeholder="Search with brand name..." className={brandsLayoutStyle.searchBar} />
                <div className={brandsLayoutStyle.cardsContainer}>
                    {
                        cardsData.map((item, index) => {
                            return (
                                <BrandsCardLayout data={item} key={index} />
                            );
                        })
                    }
            </div>
        </div>
    )
}

export default BrandsLayout;