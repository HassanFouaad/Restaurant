import React, { Component } from "react";
import { Button, FormGroup, Label, Col, Row } from "reactstrap";
import { Control, Form, Errors, actions } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(val);
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    console.log(values);
    this.props.resetFeedbackForm();
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form
              model=".feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label for="firstName" md={2}>
                  First Name <span className="text-danger">*</span>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Type your First Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  ></Control.text>
                  <Errors
                    model=".firstName"
                    show="touched"
                    className="text-danger"
                    messages={{
                      required: required,
                      minLength: "Must be greater 2 characters ",
                      maxLength: "Must less than 15 characters ",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label for="lastname" md={2}>
                  Last Name<span className="text-danger">*</span>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Type your Last Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  ></Control.text>{" "}
                  <Errors
                    model=".lastName"
                    show="touched"
                    className="text-danger"
                    messages={{
                      required: required,
                      minLength: "Must be greater 2 characters ",
                      maxLength: "Must less than 15 characters ",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label for="telNum" md={2}>
                  Tel. Number<span className="text-danger">*</span>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telNum"
                    className="form-control"
                    id="telNum"
                    name="telNum"
                    placeholder="Type your Tel."
                    validators={{
                      required,
                      isNumber,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  ></Control.text>{" "}
                  <Errors
                    model=".telNum"
                    show="touched"
                    className="text-danger"
                    messages={{
                      required: required,
                      isNumber: "Invaild Phone Number ",
                      minLength: "Must be greater 2 characters ",
                      maxLength: "Must less than 15 characters ",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label for="telnum" md={2}>
                  Email<span className="text-danger">*</span>
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    validators={{
                      required,
                      validEmail,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    placeholder="What is your Email"
                  ></Control.text>{" "}
                  <Errors
                    model=".email"
                    show="touched"
                    className="text-danger"
                    messages={{
                      required: required,
                      validEmail: "Invaild email ex@ex.ex",
                      minLength: "Must be greater 2 characters ",
                      maxLength: "Must less than 15 characters ",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-cheak">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                      ></Control.checkbox>{" "}
                      <strong style={{ color: "red" }}>
                        WE MAY CONTACT YOU
                      </strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model="contactType"
                    className="form-control"
                    name="contactType"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <FormGroup row>
                <Label htmlFor="feedback" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder=""
                    rows="12"
                  ></Control.textarea>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
