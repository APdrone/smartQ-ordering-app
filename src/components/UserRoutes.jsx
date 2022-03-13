import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Payment from "../pages/Payment";

import Dashboard from "./Dashboard";

const UserRoutes = () => {
  return (
    <Switch>
      <Route
        path={["/pizza", "/decorations", "/consumables"]}
        component={Dashboard}
      />
      <Route path={"/payment"} component={Payment} />

      <Route path="*">
        <Redirect to="/pizza" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
