import { Switch, Route } from "react-router-dom";
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { Page1DetailA } from '../Page1DetailA';
import { UrlParameter } from '../UrlParameter';
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1" render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
          </Switch>
        )}>
        </Route>
        <Route exact path="/page2">
              <Page2 />
            </Route>
        <Route path="/UrlParameter">
          <UrlParameter />
        </Route>
      </Switch>
  );
};