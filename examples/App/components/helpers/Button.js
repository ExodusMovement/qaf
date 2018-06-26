import Text from './Text';

const Button = Text.withComponent('button').extend`
  background: #fff;
  border-radius: 0;
  border: none;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 0.7;
  outline: none;

  ${({ square }) => `
    width: ${square ? 40 : 90}}px;
  `};

  &:enabled {
    cursor: pointer;
  }

  &:disabled {
    background: #eee;
  }

  &:hover:enabled,
  :focus:enabled {
    opacity: 1;
  }
`;

export default Button;
