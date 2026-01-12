import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name: title, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <fieldset className="popup__content">
        <input
          className="popup__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          className="popup__input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="URL"
        />
        <button className="popup__button popup__button_add">Guardar</button>
      </fieldset>
    </form>
  );
}
