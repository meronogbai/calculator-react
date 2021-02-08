import PropTypes from 'prop-types';

export default function Button({ name, clickHandler }) {
  const handleClick = () => clickHandler(name);

  return (
    <button type="button" onClick={handleClick} className={name === '0' ? 'Button zero' : 'Button'}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
