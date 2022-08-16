import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  /**
   * Сброс значений инпутов при открытии/закрытии попапа или при смене пользователя
   */
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeDescription(event) {
    const text = event.target.value;
    setDescription(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          name="name"
          id="name-input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChangeName}
          value={name ?? ""}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_type_job"
          id="job-input"
          placeholder="Профессия"
          name="job"
          minLength="2"
          maxLength="200"
          required
          onChange={handleChangeDescription}
          value={description ?? ""}
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
