import SimpleButton from "@/components/atoms/SimpleButton";
import Text from "@/components/atoms/Text";
import AppContext from "@/context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const DetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const { favorites } = useContext(AppContext)

    useEffect(() => {
        if (id) {
            fetch("/assets/data.json")
                .then((res) => res.json())
                .then((data) => {
                    const foundItem = data.find((item) => item._id == id);
                    if (!foundItem) {
                        setErrorMsg("No records found!")
                    }
                    setItem(foundItem);
                })
                .catch((error) => console.error("Error: ", error));
        }
    }, [id]);

    return (
        <div className="container mx-auto p-6 bg-white">
            <Head>
                <title>{item?.title || "Details page "} | Profile Card Slate.ai</title>
                <meta name="description" content="Profile cards details page" />
            </Head>
            {!errorMsg ? (
                <>
                    <h1 className="text-3xl font-bold text-center text-black">{item?.title}</h1>

                    <div className="mt-4 p-4 border rounded bg-gray-100">
                        <Text><b>Company:</b>{item?.company}</Text>
                        <Text><b>Info:</b>{item?.info}</Text>
                        <Text><b>Description:</b>{item?.description}</Text>
                        <Text><b>ID: </b>{item?._id}</Text>
                        <Text><b>GUID:</b>{item?.guid}</Text>
                    </div>

                    <div className="mt-4">
                        <span className="px-2 py-1 text-sm rounded-full text-white"
                            style={{ backgroundColor: favorites.includes(item?._id) ? "green" : "red" }}>
                            {favorites.includes(item?._id) ? "Favourite" : "Not Favourite"}
                        </span>
                    </div>
                </>
            ) : <div>{errorMsg}</div>}
            <SimpleButton callbackFn={() => router.push("/")} classes="mt-4 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Back
            </SimpleButton>
        </div>
    );
};

export default DetailPage;
