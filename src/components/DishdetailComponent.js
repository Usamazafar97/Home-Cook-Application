import React from "react";
import Serving from "./servingComponent";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText> ${dish.price}</CardText>
          <CardText> For {dish.PersonServed} persons</CardText>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ commentDetailArray }) {
  if (commentDetailArray != null) {
    return (
      <div className="row">
        <h4>Comments</h4>
        <p>
          {commentDetailArray.map((perComment) => {
            return (
              <div key={perComment.id}>
                <ul class="list-unstyled">
                  <li>{perComment.comment}</li>
                  <li>
                    {perComment.author},{perComment.date}
                  </li>
                </ul>
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetails = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>

        <div className="col-sm-12 col-md-5 m-1">
          <RenderComments commentDetailArray={props.comments} />
          <Serving dish={props.dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
