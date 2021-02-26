import React from "react";
import { StoreProvider } from "../src/utils/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRecipe from "./pages/AddRecipe";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addrecipe" component={AddRecipe} />
          </Switch>
        </Router>
        <Footer />
      </StoreProvider>
    </div>
  );
}

export default App;
