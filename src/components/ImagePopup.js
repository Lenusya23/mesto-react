import React from "react";

function ImagePopup({ card, onClose, onCloseOverlay }) {
  return (
    <div
      className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`}
      onClick={onCloseOverlay}
    >
      {/* e.stopPropagation - метод, который предотвращает распространение событий на родительские элемент */}

      <figure
        className="popup__image-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
