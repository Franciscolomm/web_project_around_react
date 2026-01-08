export default function EditAvatar() {
  return (
    <form className="popup__form form-avatar" noValidate>
      <fieldset className="popup__content">
        <label className="popup__field">
          <input
            type="url"
            className="popup__input"
            placeholder="URL de la imagen"
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
