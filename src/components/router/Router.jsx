import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../Pages/Top";
import { Users } from "../Pages/Users";
import { DefaultLayout } from "../templete/DefaultLayout";
import { HeaderOnly } from "../templete/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/Users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
