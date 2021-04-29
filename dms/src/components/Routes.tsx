import { VoidFunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Pages } from 'components';

const Routes: VoidFunctionComponent = () => (
    <Switch>
        <Route path={['/', '/home']} exact component={Pages.Home} />
        <Route path={'/publications'} exact component={Pages.Publications} />
        <Route path="*" component={Pages.Error404} />
    </Switch>
);

export default Routes;
