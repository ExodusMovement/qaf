import React from 'react';

import Container from '../../helpers/Container';

import Breadcrumb from '../components/Breadcrumb';
import Breadcrumbs from '../components/Breadcrumbs';

const createRoute = (Component, props) => {
  const Route = ({ ctx: { path } }) => {
    const current = path.split('/')[1];

    document.title = 'Qaf - Examples';
    document.title += current && ` - ${current}`;

    const isRoot = path === '/';

    return (
      <Container>
        <Breadcrumbs>
          <Breadcrumb to="https://github.com/sonaye/qaf" external>
            Qaf
          </Breadcrumb>

          <Breadcrumb to="/" disabled={isRoot} last={isRoot}>
            Examples
          </Breadcrumb>

          {current && <Breadcrumb last>{current}</Breadcrumb>}
        </Breadcrumbs>

        <Component {...props} />
      </Container>
    );
  };

  return Route;
};

export default createRoute;
