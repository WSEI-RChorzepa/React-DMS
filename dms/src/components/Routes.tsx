import { VoidFunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { Pages } from "components";
import data from "services/workspaceService";
import { IWorkspace } from "models";

const getWorkspace = (id: number): IWorkspace => {
  let result = data.workspaces.find((workspace) => workspace.id === id);

  return result as IWorkspace;
};

const Routes: VoidFunctionComponent = () => (
  <Switch>
    <Route path={["/", "/home"]} exact component={Pages.Home} />
    <Route path="/workspace/:id" render={(props) => <Pages.Workspace data={getWorkspace(+props.match.params.id)} />} />
    <Route path="/entities" exact component={Pages.Entities} />
    <Route path="/profile" exact component={Pages.Profile} />
    <Route path="*" component={Pages.Error404} />
  </Switch>
);

export default Routes;
