import TextInput from './TextInput';

const Block = TextInput.withComponent('div').extend`
  align-items: center;
  display: flex;
  justify-content: ${({ small }) => small && 'center'};
  text-decoration: ${({ strikethrough }) => strikethrough && 'line-through'};
`;

export default Block;
