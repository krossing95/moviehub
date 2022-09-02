import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layer from "./components/Layer";

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Layer}/>
          <Route path="/movies" component={Layer}/>
          <Route path="/tv-series" component={Layer}/>
          <Route path="/search" component={Layer}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;