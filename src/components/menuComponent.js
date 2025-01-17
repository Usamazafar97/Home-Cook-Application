import React from "react";
import {
  Card,
  CardTitle,
  CardImgOverlay,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  const styleObj = {
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
  };
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle style={{ fontSize: "40px", color: "black" }}>
            {dish.name}
          </CardTitle>
          <CardTitle style={styleObj}>${dish.price}</CardTitle>
          <CardTitle style={styleObj}>
            For {dish.PersonServed} persons
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
