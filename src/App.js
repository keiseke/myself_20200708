import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">HOME</Link>
          <br />
          <Link to="/page1">page1</Link>
          <br />
          <Link to="/page2">page2</Link>
          <br />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/page1"
              render={({ match: { url } }) => (
                <Switch>
                  {console.log(url)}
                  <Route exact path={url}>
                    <Page1 />
                  </Route>
                  <Route path={`${url}/detailA`}>
                    <Page1DetailA />
                  </Route>
                  <Route path={`${url}/detailA`}>
                    <Page1DetailB />
                  </Route>
                </Switch>
              )}
            />
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
