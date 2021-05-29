import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Leaderboard from "./Pages/Leaderboard";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Leaderboard} />
          <Route exact path="/banks/:bankId" component={Leaderboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
