import React from "react";

function PopupWithForm({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onSubmit,
  onClose,
  onCloseOverlay,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onCloseOverlay}
    >
      {/* e.stopPropagation - метод, который предотвращает распространение событий на родительские элемент */}

      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="popup__save" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
