import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";
import { baseURL } from "../shared/baseURL";
import { fetchPromos } from "../redux/ActionCreators";
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg
          src={baseURL + dish.image}
          width="100%"
          alt={baseURL + dish.image}
        />
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
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-md-5 col-md-5 m-1 ">
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div align="center">
          <Loading className="col"></Loading>
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return <h4>Failed to Load</h4>;
  } else
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
