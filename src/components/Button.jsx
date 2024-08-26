import PropTypes from 'prop-types';

function Button(props) {
  const styles = {
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
    padding: '10px 20px',
    backgroundColor: "hsl(200, 100%, 50%)",
  }

  return (
    <button type='button'
      onClick={props.onClick}
      style={styles}>
      {props.children}
    </button>);
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;