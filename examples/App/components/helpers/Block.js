import TextInput from './TextInput';

const Block = TextInput.withComponent('div').extend`
  align-items: center;
  display: flex;
  justify-content: ${({ small }) => small && 'center'};
`;

export default Block;
