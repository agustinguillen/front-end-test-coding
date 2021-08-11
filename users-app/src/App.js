import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import NavBar from './components/NavBar/NavBar';
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:login" component={UserDetail} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
