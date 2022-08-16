import React from "react";

import Card from "./Card";
import Header from "./Header";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  email,
  onLogout,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header isWrappable={true}>
        <p className="header__menu-item">{email}</p>
        <button href="#" className="header__menu-item" onClick={onLogout}>
          Выйти
        </button>
      </Header>

      <main>
        <section className="profile content__element">
          <div className="profile__avatar">
            <img
              src={currentUser.avatar}
              alt="Фотография пользователя"
              className="profile__avatar-image"
            />
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="Обновить аватар"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__button profile__button_type_edit"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button
            type="button"
            className="profile__button profile__button_type_add"
            aria-label="Добавить фотографию"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="cards content__element" aria-label="Фотографии">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
