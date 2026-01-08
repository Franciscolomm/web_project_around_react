export default function NewCard() {
  return (
    <form className="popup__form form-add" noValidate>
      <fieldset className="popup__content">
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_title"
            placeholder="Titulo"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input
            type="url"
            className="popup__input popup__input_url"
            placeholder="URL a la imagen"
            required
          />
          <span className="popup__input-error"></span>
        </label>

        <button type="submit" className="popup__button popup__button_add">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
