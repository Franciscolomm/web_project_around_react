import { useState } from "react";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import Card from "./components/card/Card";

const cards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "./images/Yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "2",
    name: "Lake Louise",
    link: "./images/louise.png",
  },
  {
    isLiked: false,
    _id: "3",
    name: "Latemar",
    link: "./images/latemar.png",
  },
  {
    isLiked: false,
    _id: "4",
    name: "Vanois",
    link: "./images/vanois.png",
  },
  {
    isLiked: false,
    _id: "5",
    name: "Montañas Calvas",
    link: "./images/calvas.png",
  },
   {
    isLiked: false,
    _id: "6",
    name: "Di Braies",
    link: "./images/di braies.png",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Cambiar avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <div className="main__profile">
        <div className="main__content-image">
          <img
            src="/images/francisco image.jpg"
            alt="profile"
            className="main__profile-image"
            onClick={() => handleOpenPopup(editAvatarPopup)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">
            Francisco Lomm
          </p>
          <p className="main__paragraph main__paragraph_about">
            Estudiante
          </p>
          <button
            type="button"
            className="main__button main__button_edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            &#x1F58C;
          </button>
        </div>

        <button
          type="button"
          className="main__button main__button_add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          &#x1F7A3;
        </button>
      </div>

      <div className="main__gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;


