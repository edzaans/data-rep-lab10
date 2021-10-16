import "./App.css";
// Import Component from react Library
import { Component } from "react";
// Import 3 Components that were created  to be used in App.js
import Content from "./Components/Content";
import { Read } from "./Components/Read";
import { Create } from "./Components/Create";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Navbar Component from Bootstrap libary
import { Navbar, Nav } from "react-bootstrap";
// Import Router,Switch,Route from ReactDOM to use in navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  // add render() that is used to display content
  render() {
    // Return value goes here, Components in this case
    return (
      /* Add ROUTER that will allow for navigating to other Components */
      <Router>
        <div className="App">
          {/* Can add Container for extra styling - add it in IMPORTS */}
          {/* <Container> */}
          {/* Create NAVBAR */}
          <Navbar bg="primary" variant="dark" className="px-2">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          {/* </Container> */}

          <br />

          {/* Add SWITCH to set path to COMPONENTS */}
          <Switch>
            {/* Set PATHS to component */}
            <Route path="/" component={Content} exact></Route>
            <Route path="/read" component={Read} exact></Route>
            <Route path="/create" component={Create} exact></Route>
          </Switch>
          {/* End SWITCH */}
        </div>
      </Router>
      /* End ROUTER */
    );
  }
}

// Used this method of exporting a CLASS, please comment if this is acceptable
// to use as opposed to adding 'export' at teh beginning of a Class
export default App;
