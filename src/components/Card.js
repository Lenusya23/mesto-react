import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }
  return (
    <div className="element">
      <img
        className="element__mask"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <button
        className="element__trash"
        type="button"
        aria-label="Корзина"
      ></button>
      <div className="element__group">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__container-like">
          <button
            className="element__like-button"
            aria-label="Поставить лайк"
          ></button>
          <span className="element__count-like">{props.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
