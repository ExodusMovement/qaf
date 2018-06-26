import Button from './Button';

const TextInput = Button.withComponent('input').extend.attrs({ type: 'text' })`
  padding-left: 20px;
  padding-right: 20px;
  width: ${({ small, large }) => (small ? 50 : large ? 340 : 250)}px;

  &:enabled {
    cursor: text;
  }

  &:disabled {
    background: #fff;
  }
`;

export default TextInput;
