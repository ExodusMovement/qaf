import TextInput from './TextInput';

const Block = TextInput.withComponent('div').extend.attrs({ type: null })`
  line-height: 40px;
  overflow: hidden;
  text-align: ${({ small }) => small && 'center'};
  text-decoration: ${({ strikethrough }) => strikethrough && 'line-through'};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Block;
