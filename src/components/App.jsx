import { useState } from "react";
import { useEffect } from "react";
import Header from "./header/header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.log);
    api.getCardList().then(setCards).catch(console.log);
  }, []);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        handleClosePopup();
      })
      .catch(console.log);
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        handleClosePopup();
      })
      .catch(console.log);
  }

  async function handleCardLike(card) {
    const isLiked = card.likes.some((u) => u._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.log);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.log);
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

