import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div className="">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
