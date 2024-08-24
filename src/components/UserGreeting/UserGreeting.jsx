import PropTypes from "prop-types";
import "./UserGreeting.css";

function UserGreeting(props) {
  if (props.isLoggedIn)
    return <h1 className="welcome-message">Welcome back, {props.username}!</h1>;
  else return <h2 className="login-prompt">Please login to continue</h2>;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;

