import Card from "@/components/molecules/Card";
import AppContext from "@/context";
import { useState, useEffect, useContext } from "react";


const HomePageSection = () => {
    const [data, setData] = useState([]);
    const { favorites } = useContext(AppContext)
    const [isOnlyFavSelected, setIsOnlyFavSelected] = useState(false);

    useEffect(() => {
        fetch("/assets/data.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error: ", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-6">{isOnlyFavSelected ? "Favourite cards" : "All Cards"}</h1>
                <h2 className="text-yellow-500 font-semibold cursor-pointer" onClick={() => setIsOnlyFavSelected(prev => !prev)}>
                    {isOnlyFavSelected ? "Show all" : "+ Show only favorites"}
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <Card
                        key={item._id}
                        item={item}
                        isFavorite={favorites.includes(item._id)}
                        isOnlyFavSelected={isOnlyFavSelected}
                    />
                ))}
                {isOnlyFavSelected && favorites.length == 0 ? "No favourites added" : null}
            </div>
        </div>
    );
};

export default HomePageSection;
