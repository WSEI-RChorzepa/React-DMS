import { VoidFunctionComponent } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { Pages } from "components";
import data from "services/workspaceService";
import { IWorkspace } from "models";

const fetchWorkspace = (id: number): IWorkspace => {
  let result = data.workspaces.find((workspace) => workspace.id === id);

  return result as IWorkspace;
};

const Routes: VoidFunctionComponent = () => (
  <Switch>
    <Route path={["/", "/home"]} exact component={Pages.Home} />
    <Route path={"/publications"} exact component={Pages.Publications} />
    <Route path="/workspace/:id" render={(props) => <Pages.Workspace data={fetchWorkspace(+props.match.params.id)} />} />
    <Route path="*" component={Pages.Error404} />
  </Switch>
);

export default Routes;
