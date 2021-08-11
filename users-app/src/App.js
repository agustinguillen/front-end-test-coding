import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:login" component={UserDetail} />
        </Switch>
    </Router>
  );
}

export default App;
