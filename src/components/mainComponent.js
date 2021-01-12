import React, { Component } from "react";
import Menu from "./menuComponent";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import Cart from "./CartComponent";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import { Switch, Route, Redirect, Router } from "react-router-dom";

import DishDetail from "./DishdetailComponent";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Route exact path="/cart" component={() => <Cart />}></Route>
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          ></Route>
          <Redirect to="/home"></Redirect>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
