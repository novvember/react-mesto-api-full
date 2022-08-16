import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  /**
   * Сброс значений инпутов при открытии/закрытии попапа
   */
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeLink(event) {
    const text = event.target.value;
    setLink(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_type_title"
          id="title-input"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          className="popup__input popup__input_type_link"
          id="link-input"
          placeholder="Ссылка на картинку"
          name="link"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
