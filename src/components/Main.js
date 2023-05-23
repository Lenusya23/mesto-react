import React, { useState, useEffect } from "react";
import pen from "../images/profile__edit-avatar.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, getInitialCards] = useState([]);

  React.useEffect(() => {
    api
      .getRealUserInfo()
      .then((data) => {
        return (
          setUserName(data.name),
          setUserDescription(data.about),
          setUserAvatar(data.avatar)
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        getInitialCards(
          data.map((card) => ({
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id,
          }))
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

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
                  props.onEditAvatar(true);
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
                props.onEditProfile(true);
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
            props.onAddPlace(true);
          }}
          className="profile__add-button"
          type="button"
        />
      </section>
      <template className="template" />
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
