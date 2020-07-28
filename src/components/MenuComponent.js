import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg src={dish.image} width="100%" alt={dish.image} />
        <CardImgOverlay>
          <CardTitle>
            <h5>{dish.name}</h5>
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-md-5 col-md-5 m-1 ">
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </div>
    );
  });

  return (
    <div className="container ">
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
          <h3>MENU</h3>
          <hr></hr>
        </div>
      </div>
      <div className="align-self-center row">{menu}</div>
    </div>
  );
};

export default Menu;
