import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  // const isLiked = card.likes.some((u) => u._id === currentUser._id);
  const isOwn = card.owner._id === currentUser._id;

  const cardLikeButtonClassName = `main__button main__button_like ${
    card.isLiked ? "main__button_like_active" : ""
  }`;

  return (
    <div className="main__gallery-card">
      <img className="main__gallery-image" src={card.link} alt={card.name} />

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
          // onClick={() => onCardLike(card)}
        ></button>
      </div>
    </div>
  );
}
