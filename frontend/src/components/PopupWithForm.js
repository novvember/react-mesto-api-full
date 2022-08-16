function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) onClose(event);
  }

  return (
    <div
      className={`popup popup_type_${name}` + (isOpen && " popup_opened")}
      onClick={handleOverlayClick}
    >
      <div className="popup__container content__element">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button className="popup__save-button" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
