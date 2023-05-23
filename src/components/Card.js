import React from "react";

function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }
  return (
    <div className="element" onClick={card.onClose}>
      <img
        className="element__mask"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="element__trash"
        type="button"
        aria-label="Корзина"
      ></button>
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container-like">
          <button
            className="element__like-button"
            aria-label="Поставить лайк"
          ></button>
          <span className="element__count-like">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
