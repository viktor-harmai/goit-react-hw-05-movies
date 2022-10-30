import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onClick }) => {
  return <Btn onClick={onClick}>GO BACK</Btn>;
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
