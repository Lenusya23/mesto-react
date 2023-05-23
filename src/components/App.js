import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [selectedCard, setSelectedCard] = useState({});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />

        <Footer />
        <PopupWithForm
          name="editProfile"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              id="nameInput"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="nameInput-error error" />
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_job"
              name="about"
              id="jobInput"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="jobInput-error error" />
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="addPlace"
          title="Новое место"
          button="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              id="name"
              type="text"
              placeholder="Новое место"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="name-error error" />
          </label>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_link"
              name="link"
              id="link"
              type="url"
              placeholder="Ссылка"
              required
            />
            <span className="link-error error" />
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="updateAvatar"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input
              id="nameInputAvatar"
              className="popup__input popup__input_type_link-avatar"
              name="avatar"
              type="url"
              placeholder="Введите ссылку URL"
              required
            />
            <span className="nameInputAvatar-error error" />
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="deleteCards"
          title="Вы уверены?"
          button="Да"
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
