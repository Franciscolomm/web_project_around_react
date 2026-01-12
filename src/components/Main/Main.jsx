import { useState } from "react";
import { useContext } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import Card from "./components/card/Card";
import CurrentUserContext from "../Contexts/CurrentUserContext";

function Main({
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
  onOpenPopup,
  onClosePopup,
  popup,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar avatar",
    children: <EditAvatar />,
  };

  return (
    <main className="main">
      <div className="main__profile">
        <div className="main__content-image">
          <img
            src={currentUser.avatar}
            alt="profile"
            className="main__profile-image"
            onClick={() => onOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">
            {currentUser.name}
          </p>
          <p className="main__paragraph main__paragraph_about">
            {currentUser.about}
          </p>
          <button
            className="main__button main__button_edit"
            onClick={() => onOpenPopup(editProfilePopup)}
          >Edit info</button>
        </div>

        <button
          className="main__button main__button_add"
          onClick={() => onOpenPopup(newCardPopup)}
        > + </button>
      </div>

      <div className="main__gallery">
      {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </div>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;

