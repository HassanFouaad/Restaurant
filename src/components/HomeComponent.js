import React from "react";
import { Loading } from "./LoadingComponent";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { baseURL } from "../shared/baseURL";
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div align="center">
        <Loading></Loading>
      </div>
    );
  } else if (errMess) {
    return <h4>Failed to Load</h4>;
  } else {
    return (
      <Card>
        <CardImg src={baseURL + item.image} alt={baseURL + item.name}></CardImg>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle className="mb-2" style={{ color: "#9575CD" }}>
              {item.designation}
            </CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errMess={props.promosErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}
