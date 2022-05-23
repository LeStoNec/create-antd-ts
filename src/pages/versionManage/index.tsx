import React from 'react';
import { Provider } from 'mobx-react';
import { RouteConfigComponentProps } from 'react-router-config';
import Main from './components/Main';
import stores from './stores';
import { catchError } from '../../hoc';

const HomePage = (props: RouteConfigComponentProps<any>) => {
  return (
    <Provider {...stores}>
      <Main {...props} />
    </Provider>
  );
};

export default catchError(HomePage);
