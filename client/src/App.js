import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favourite" component={Favourite} />
      </Switch>
    </>
  );
};

export default App;
