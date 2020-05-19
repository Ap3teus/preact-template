import { h } from 'preact';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/foo">{/* <Foo /> */}</Route>
      <Route path="/">{/* <FrontPage /> */}</Route>
    </Switch>
  </Router>
);

export default AppRouter;
