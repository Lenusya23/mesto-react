import React, { useState, useEffect } from "react";
import pen from "../images/profile__edit-avatar.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getRealUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardElements = cards.map((card) => (
    <Card
      key={card.cardId}
      link={card.link}
      name={card.name}
      likes={card.likes}
      onCardClick={onCardClick}
    />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__wrapper-relative">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Изображенна фото Жак-Ив Кусто в красной шапке"
            />
            <button className="profile__edit-avatar" type="button">
              <img
                onClick={() => {
                  onEditAvatar(true);
                }}
                className="profile__edit-pen"
                src={pen}
                alt="изображение письменной ручки"
              />
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={() => {
                onEditProfile(true);
              }}
              className="profile__edit-button"
              id="myBtn"
              type="button"
            />
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={() => {
            onAddPlace(true);
          }}
          className="profile__add-button"
          type="button"
        />
      </section>

      <section className="elements">{cardElements}</section>
    </main>
  );
}

export default Main;
