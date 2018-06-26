import Btn from './Btn';

const Input = Btn.withComponent('input').extend.attrs({ type: 'text' })`
  padding-left: 20px;
  padding-right: 20px;

  ${({ small, large, strikethrough }) => `
    text-align: ${small && 'center'};
    text-decoration: ${strikethrough && 'line-through'};
    width: ${small ? 90 : large ? 340 : 290}}px;
  `}

  &:enabled {
    cursor: text;
  }

  &:disabled {
    background: #fff;
  }
`;

export default Input;
