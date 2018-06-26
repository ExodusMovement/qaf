import Input from './Input';

const Block = Input.withComponent('div').extend`
  align-items: center;
  display: flex;
  justify-content: ${({ small }) => small && 'center'};
`;

export default Block;
