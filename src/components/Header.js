import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, btnColor, text }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={text} color={btnColor} onClick={() => { onAdd() }} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
