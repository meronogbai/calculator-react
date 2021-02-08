import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
