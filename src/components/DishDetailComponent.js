import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

import { Link } from "react-router-dom";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      formIsOpen: !this.state.formIsOpen,
    });
  }

  handleSubmit(values) {
    this.toggleForm();
    alert("COMMENT STATE IS" + JSON.stringify(values));
    console.log(values);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleForm}>
          <span className="fa fa-pencil"></span>Submit Comment
        </Button>
        <Modal isOpen={this.state.formIsOpen} toggle={this.toggleForm}>
          <ModalHeader>Submit Comment</ModalHeader>
          <Button
            onClick={this.toggleForm}
            className="close"
            style={{ position: "absolute", top: "15px", right: "15px" }}
          >
            &times;
          </Button>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label for="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  className="form-control"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>

              <div className="form-group">
                <Label for="clientname">Your Name</Label>
                <Control.text
                  model=".clientname"
                  className="form-control"
                  name="clientname"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                ></Control.text>
                <Errors
                  model=".clientname"
                  show="touched"
                  className="text-danger"
                  messages={{
                    required: "REQUIRED ",
                    minLength: "Must be greater 2 characters ",
                    maxLength: "Must less than 15 characters ",
                  }}
                ></Errors>
              </div>
              <div className="form-group">
                <Label for="commenttext">Comment</Label>
                <Control.textarea
                  model=".commenttext"
                  className="form-control"
                  name="commenttext"
                  rows="8"
                ></Control.textarea>
              </div>
              <Button type="submit" color="primary">
                Comment
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderDish(dish) {
  return (
    <Card>
      <CardImg src={dish.image} width="100%" alt={dish.image} />
      <CardTitle className="ml-4 mt-4">
        <h4>{dish.name}</h4>
      </CardTitle>
      <CardBody>{dish.description}</CardBody>
    </Card>
  );
}
function RenderComments(comments) {
  if (comments == null) {
    return <div></div>;
  }
  var menus = comments.map((commenti) => {
    return (
      <li key={commenti.id}>
        <div>
          <p>{commenti.comment}</p>
        </div>
        <div>
          <p>
            --{commenti.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(commenti.date))}
          </p>
        </div>
      </li>
    );
  });
  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{menus}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  var dish = props.selected;
  var comments = props.comments;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <hr></hr>
          <h3>{dish.name}</h3>
          {console.log(dish.name)}
          <hr></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{RenderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {RenderComments(comments)}
          <CommentForm></CommentForm>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
