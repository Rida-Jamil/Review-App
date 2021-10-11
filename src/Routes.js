import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog";
import Details from "./components/Details";
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home";
import { useHistory } from "react-router";


function Routes() {

  let history = useHistory();
  // <Navbar.Brand className="heading" style={{ color: 'white' }} onClick={() => history.push("/Home")>Home</Navbar.Brand>

  return (
    <>

        <Navbar bg="info" fixed="top" className="justify-content-center border-bottom border-3 border-danger">
          <div className="nav">
            <Navbar.Brand className="heading bg-danger p-2 border border-3 border-white" style={{ color: 'white' }} onClick={() => history.push("/Home")}>Home</Navbar.Brand>
            <Navbar.Brand className="heading bg-danger p-2 border border-3 border-white" style={{ color: 'white' }} onClick={() => history.push("/Blog")}> Mobiles </Navbar.Brand>
          </div>
        </Navbar>

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/details/:id" render={props => (<Details {...props} />)}>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>


    </>
  )
}

export default Routes;