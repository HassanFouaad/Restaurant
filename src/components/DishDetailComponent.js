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
import { baseURL } from "../shared/baseURL";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
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
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
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
                  id="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>

              <div className="form-group">
                <Label for="author">Your Name</Label>
                <Control.text
                  model=".author"
                  className="form-control"
                  name="author"
                  id="author"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                ></Control.text>
                <Errors
                  model=".author"
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
                <Label for="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  className="form-control"
                  name="comment"
                  rows="8"
                  id="comment"
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
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateX(50%)" }}
    >
      <Card>
        <CardImg
          src={baseURL + dish.image}
          width="100%"
          alt={baseURL + dish.image}
        />
        <CardTitle className="ml-4 mt-4">
          <h4>{dish.name}</h4>
        </CardTitle>
        <CardBody>{dish.description}</CardBody>
      </Card>
    </FadeTransform>
  );
}
function RenderComments(comments, postComment, dishId) {
  if (comments == null) {
    return <div></div>;
  }
  var menus = comments.map((commenti) => {
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateX(50%)" }}
      >
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
      </FadeTransform>
    );
  });
  return (
    <div>
      <h4>Comments</h4>

      <ul className="list-unstyled">
        <Stagger in>{menus}</Stagger>
      </ul>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>Failed!</h4>
        </div>
      </div>
    );
  }
  var dish = props.selected;
  var comments = props.comments;
  var postComment = props.postComment;
  var dishId = dish.id;
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
          {RenderComments(comments, postComment, dishId)}
          <CommentForm dishId={dishId} postComment={postComment}></CommentForm>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
