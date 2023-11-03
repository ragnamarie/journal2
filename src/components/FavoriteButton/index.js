import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? (
        <StarFilled onClick={toggleFavorite} />
      ) : (
        <Star onClick={toggleFavorite} />
      )}
    </button>
  );
}
