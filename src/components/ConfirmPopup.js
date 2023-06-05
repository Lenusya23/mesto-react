import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupConfirmation({
  card,
  isOpen,
  onLoading,
  onClose,
  onCardDelete,
  onCloseOverlay,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="deleteCards"
      title="Вы уверены?"
      buttonText={onLoading ? `Удаление...` : `Да`}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onCloseOverlay={onCloseOverlay}
    />
  );
}

export default PopupConfirmation;
