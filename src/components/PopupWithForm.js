import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onClose}
    >
      {/* e.stopPropagation - метод, который предотвращает распространение событий на родительские элемент */}

      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button className="popup__save" type="submit">
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
