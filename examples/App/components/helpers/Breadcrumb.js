import React from 'react';

import { Link } from 'pagify-it'; // eslint-disable-line import/no-extraneous-dependencies

import base from '../../routes/base';

import Text from './Text';

const LinkContainer = Text.withComponent('a').extend`
  color: #61dafb;
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const BreadcrumbContainer = LinkContainer.withComponent(Link);

const Breadcrumb = ({ children, disabled, to, external, last }) => (
  <Text>
    {disabled || !to ? (
      children
    ) : external ? (
      <LinkContainer href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </LinkContainer>
    ) : (
      <BreadcrumbContainer {...{ base, to }}>{children}</BreadcrumbContainer>
    )}

    {!last && ' / '}
  </Text>
);

export default Breadcrumb;
