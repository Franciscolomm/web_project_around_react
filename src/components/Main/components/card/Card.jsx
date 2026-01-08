export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <div className="main__gallery-card">
      <img
        className="main__gallery-image"
        src={link}
        alt={name}
      />

      <button
        type="button"
        className="main__button main__button_trash"
      ></button>

      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{name}</p>

        <button
          type="button"
          className={`main__button main__button_like ${
            isLiked ? "main__button_like_active" : ""
          }`}
        ></button>
      </div>
    </div>
  );
}

