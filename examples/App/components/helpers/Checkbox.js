import React from 'react';

import styled from 'styled-components';

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckboxMark = styled.span`
  background: #eee;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
  height: 40px;
  opacity: 0.7;
  position: absolute;
  width: 40px;

  &:after {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 45px;
  position: relative;

  ${CheckboxInput}:checked ~ ${CheckboxMark} {
    background-color: #61dafb;
  }

  ${CheckboxInput}:checked ~ ${CheckboxMark}:after {
    content: '';
    display: block;
    position: absolute;
  }

  ${CheckboxMark}:after {
    border: solid #fff;
    border-width: 0 3px 3px 0;
    height: 12.5px;
    left: 16px;
    top: 10px;
    transform: rotate(45deg);
    width: 5px;
  }
`;

const Checkbox = props => (
  <CheckboxLabel>
    <CheckboxInput {...props} />
    <CheckboxMark />
  </CheckboxLabel>
);

export default Checkbox;
