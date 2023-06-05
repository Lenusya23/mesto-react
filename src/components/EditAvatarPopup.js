import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onLoading,
  onClose,
  onUpdateAvatar,
  onCloseOverlay,
}) {
  const avatarRef = React.useRef(null);

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  return (
    <PopupWithForm
      name="updateAvatar"
      title="Обновить аватар"
      buttonText={onLoading ? `Сохранение...` : `Сохранить`}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__label">
        <input
          id="nameInputAvatar"
          className="popup__input popup__input_type_link-avatar"
          name="avatar"
          type="url"
          onChange={handleChangeAvatar}
          ref={avatarRef}
          placeholder="Введите ссылку URL"
          required
        />
        <span className="nameInputAvatar-error error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
