import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({ card, onCardLike, onCardDelete, onOpenPopup }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardLikeButtonClassName = `main__button main__button_like ${
    card.isLiked ? "main__button_like_active" : ""
  }`;

  function handleImageClick() {
    onOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }

  return (
    <div className="main__gallery-card">
      <img
        className="main__gallery-image"
        src={card.link}
        alt={card.name}
        onClick={handleImageClick}
      />

      {isOwn && (
        <button
          className="main__button main__button_trash"
          onClick={() => onCardDelete(card)}
        ></button>
      )}

      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{card.name}</p>

        <button
          className={cardLikeButtonClassName}
        ></button>
      </div>
    </div>
  );
}
