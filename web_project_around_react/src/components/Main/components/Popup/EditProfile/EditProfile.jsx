export default function EditProfile() {
  return (
    <form className="popup__form form-edit" noValidate>
      <fieldset className="popup__content">
        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            placeholder="Acerca de mi"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error"></span>
        </label>

        <button type="submit" className="popup__button popup__button_save">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
