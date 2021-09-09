import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Pagenotfound from "./Pagenotfound";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      

      
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          
          <Route path="" component={Pagenotfound} />
        </Switch>
      

      
      </BrowserRouter>
    </>
  );
}

export default App;
