import { useContext, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import AppContext from "@/context";
import SimpleButton from "@/components/atoms/SimpleButton";
const InfoPopup = dynamic(() => import("@/components/molecules/InfoPopup"), {
    ssr: false,
});

const Card = ({ item, isFavorite, isOnlyFavSelected }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const router = useRouter();
    const { onToggleFavorite } = useContext(AppContext)

    // If show only favourites selected, don't show non-favourite items
    if (isOnlyFavSelected && !isFavorite) {
        return null
    }

    return (
        <div className="p-4 border rounded-lg shadow relative bg-slate-50">
            <div className="relative text-center">
                <h3 className="font-semibold text-black">{item.title}</h3>
                <SimpleButton callbackFn={() => onToggleFavorite(item._id)} classes={` ${isFavorite ? "text-yellow-500" : "text-gray-400"} text-xl absolute right-0 top-0 text-gray-400`}>
                    ★
                </SimpleButton>
            </div>
            <SimpleButton callbackFn={() => setIsPopupOpen(true)} classes="mt-5 mb-5 text-blue-500 underline">
                Info
            </SimpleButton>
            <hr />
            <div className="flex">
                <SimpleButton callbackFn={() => router.push(`/detail/${item._id}`)} classes="mt-3 ml-auto px-3 py-1 bg-green-500 text-white rounded">
                    Open
                </SimpleButton>
            </div>
            {isPopupOpen ? (
                <InfoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} content={item.description} title={item.title} />
            ) : null}
        </div>
    );
};

export default Card;
