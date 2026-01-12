export default function ImagePopup(props) {
  const { link, name } = props.card;

  return (
    <div className="fullview__container">
      <img
        src={link}
        alt={name}
        className="fullview__image"
      />
    </div>
  );
}

