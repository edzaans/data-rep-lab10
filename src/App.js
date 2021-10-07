import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Switch>
            <Route path="/" component={Content} exact></Route>
            <Route path="/read" component={Footer} exact></Route>
            <Route path="/create" component={Header} exact></Route>
          </Switch>

          {/* <Header></Header> */}
          {/* <Content></Content> */}
          {/* <Footer></Footer> */}
        </Router>
      </div>
    );
  }
}

// Used this method of exporting a CLASS, please comment if this is acceptable
// to use as opposed to adding 'export' at teh beginning of a Class
export default App;
