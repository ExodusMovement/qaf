import Btn from './Btn';

const Input = Btn.withComponent('input').extend.attrs({
  type: 'text',
  'aria-label': 'Input'
})`
  padding-left: 20px;
  padding-right: 20px;

  ${({ small, large, strikethrough }) => `
    text-decoration: ${strikethrough && 'line-through'};
    width: ${small ? 50 : large ? 340 : 250}}px;
  `}

  &:enabled {
    cursor: text;
  }

  &:disabled {
    background: #fff;
  }
`;

export default Input;
