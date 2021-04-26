import { VoidFunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Publications } from 'components';
import { Error404 } from 'components/common';

const Routes: VoidFunctionComponent = () => (
    <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        <Route path={'/publications'} exact component={Publications} />
        <Route path="*" component={Error404} />
    </Switch>
);

export default Routes;
