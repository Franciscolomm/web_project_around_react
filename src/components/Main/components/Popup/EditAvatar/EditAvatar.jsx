import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../Contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <fieldset className="popup__content">
        <input
          type="url"
          className="popup__input"
          ref={avatarRef}
          placeholder="URL de la imagen"
          required
        />
        <button className="popup__button popup__button_save">Guardar</button>
      </fieldset>
    </form>
  );
}

