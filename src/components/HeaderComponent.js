import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Jumbotron,
  Nav,
  NavItem,
  Modal,
  Form,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import CommentForm from "./CommentForm";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModelOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModel = this.toggleModel.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModel() {
    this.setState({
      isModelOpen: !this.state.isModelOpen,
    });
  }
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" color="faded">
          <div className="container">
            <NavbarToggler expand="sm" onClick={this.toggleNav}></NavbarToggler>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante"
              ></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> AboutUs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <Nav>
              <NavItem>
                <Button
                  onClick={this.toggleModel}
                  style={{ backgroundColor: "#9575CD" }}
                >
                  <i className="fa fa-sign-in fa-lg"></i>
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-md-11 col-sm-5">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We inspiration from The World's best cuisiens, and create
                  unique function experience. Our Lipsmacking creations will
                  take tickle your clinrary
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="username">UserName</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  innerRef={(input) => (this.username = input)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Pasword</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  innerRef={(input) => (this.password = input)}
                ></Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    innerRef={(input) => (this.remember = input)}
                  ></Input>
                  RememberMe
                </Label>
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="submit" className="bg-primary">
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
