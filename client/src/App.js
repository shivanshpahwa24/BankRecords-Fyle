import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BankBranches from "./Pages/BankBranches";
import BankDetails from "./Pages/BankDetails";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BankBranches} />
          <Route exact path="/banks/:bankId" component={BankDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
