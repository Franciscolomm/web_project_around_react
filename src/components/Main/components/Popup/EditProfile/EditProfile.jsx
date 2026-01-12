import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../Contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <fieldset className="popup__content">
        <input
          className="popup__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="popup__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="popup__button popup__button_save">Guardar</button>
      </fieldset>
    </form>
  );
}

