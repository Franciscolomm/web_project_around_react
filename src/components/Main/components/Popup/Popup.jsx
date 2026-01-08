export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div
        className={`popup__container ${
          !title ? "popup__container_content_image" : ""
        }`}
      >
        <button
          type="button"
          className="popup__button popup__button_close"
          onClick={onClose}
        >
          &#x1F7A9;
        </button>

        {title && <h2 className="popup__subtitle">{title}</h2>}

        {children}
      </div>
    </div>
  );
}
