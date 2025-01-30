import AppContext from "@/context";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  const onToggleFavorite = (id) => {
    let tempArr = [...favorites]
    if (favorites.includes(id)) {
      const index = tempArr.indexOf(id);
      if (index > -1) {
        tempArr.splice(index, 1);
      }
    } else {
      tempArr.push(id)
    }
    setFavorites(tempArr)
  };

  return (
    <AppContext.Provider value={{ favorites, onToggleFavorite }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
