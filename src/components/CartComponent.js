import React, { Component } from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCart({ item }) {
  if (item) {
    return item.map((item) => {
      return (
        <li key={item.id}>
          <span>{item.dishName}</span>
          <span>{item.dishServing}</span>
          <span>{item.totalPersons}</span>
          <span>{item.quantity}</span>
        </li>
      );
    });
  } else {
    return (
      <div>
        <h3>No items in cart</h3>
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ItemCart: [],
    };
  }

  // componentDidMount() {
  //   const ItemCart = localStorage.getItem("cart");
  //   if (ItemCart) {
  //     const parsedJSON = JSON.parse(ItemCart);
  //     this.setState({ ItemCart: parsedJSON });
  //   }
  //   console.log("saved,", sessionStorage.getItem("cart"));
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cart</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Cart</h3>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Cart Information</h3>
          </div>
          {/* <div className="col-12 col-sm-6 offset-sm-1"> */}

          <div className="col-12 col-sm-6 offset-sm-1">
            {/* <button>Show</button> */}
            {/* <RenderCart item={this.props.CartItems} /> */}
            <RenderCart item={this.props.CartItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
