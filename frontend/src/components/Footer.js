function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer content__element">
      <p className="footer__copyright">
        &copy;&nbsp;{currentYear <= 2022 ? "2022" : `2022&ndash;${currentYear}`}{" "}
        Студенты Яндекс.Практикума
      </p>
    </footer>
  );
}

export default Footer;
