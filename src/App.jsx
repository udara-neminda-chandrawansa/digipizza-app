import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import { Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomerDash from "./pages/Customer";
import { useState } from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-start">
      <Nav></Nav>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup/:type">
          {(params) => <Signup type={params.type} />}
        </Route>
        <Route path="/users/:id">
          {(params) => <CustomerDash uid={params.id}/>}
        </Route>
        <Route path="/products/:id">
          {(params) => <Product pid={params.id} />}
        </Route>

        {/* Default route in a switch */}
        <Route>{Error}</Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
