import { Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <DefaultLayout>
        <Top />
      </DefaultLayout>
      </Route>
      <Route exact path="/users">
      <HeaderOnly>
        <Users />
      </HeaderOnly>
      </Route>
    </Switch>
    </BrowserRouter>
  );
};