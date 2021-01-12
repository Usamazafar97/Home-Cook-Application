import React, { Component, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Input, Col } from "reactstrap";

const ModalExample = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button
        outline
        style={{ marginTop: "15%", marginLeft: "18%" }}
        color="primary"
        onClick={toggle}
      >
        Confirm
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Delivery
        </ModalHeader>
        <ModalBody>
          Your Order will be delivered after 5 hours, Thank You
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

class Serving extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: 1,
      quantity: 0,
      dishServing: 0,
      mode: 1,
      divide: 1,
    };
  }

  addPerson() {
    if (this.state.persons >= 0) {
      this.setState({ persons: this.state.persons + 1 });
    }
    console.log(this.state.persons);
  }

  removePerson() {
    if (this.state.persons > 0) {
      this.setState({ persons: this.state.persons - 1 });
    }
  }
  calculateQuantity() {
    this.setState({
      dishServing: this.props.dish.PersonServed,
    });
    // console.log("PersonServed");

    if (
      this.state.persons < this.state.dishServing &&
      this.state.persons !== 0
    ) {
      this.setState({
        quantity: 1,
      });
      // console.log("this.state.persons < this.state.dishServing");
    } else if (this.state.persons === 0) {
      // console.log("persons =" + this.state.persons);
      this.setState({
        quantity: 0,
      });
    } else if (this.state.persons > this.state.dishServing) {
      // console.log("this.state.persons > this.state.dishServing");
      this.setState({
        mode: Math.floor(this.state.persons % this.state.dishServing),
        divide: Math.floor(this.state.persons / this.state.dishServing),
        quantity: this.state.mode + this.state.divide,
      });
    } else {
      // console.log("else");
      this.setState({
        quantity: 1,
      });
    }
    // alert(this.state.quantity + " " + this.state.persons);
  }

  addItem(dish) {
    console.log("hello");
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-12 col-md-12">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="Enter your address"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
          </Form>
        </div>
        {/* <div className="col-sm-12 col-md-12 m-1"> */}
        <div className="row">
          <h4>Order</h4>
        </div>
        <div style={{ marginTop: "10%" }} className="row">
          <h5 style={{ marginRight: "10%" }}>Number of peoples</h5>
          <Button
            color="success"
            style={{ marginRight: "10%" }}
            onClick={() => this.addPerson()}
          >
            +
          </Button>
          <h3>{this.state.persons}</h3>
          <Button
            color="danger"
            style={{ marginLeft: "10%" }}
            onClick={() => this.removePerson()}
          >
            -
          </Button>
          <Button
            style={{ marginTop: "10%" }}
            color="primary"
            size="lg"
            block
            onClick={() => {
              this.calculateQuantity();
              this.addItem(this.props.dish);
            }}
          >
            Check Out
          </Button>
          {/* <Button
            outline
            style={{ marginTop: "5%" }}
            color="primary"
            onClick={() => {
              this.calculateQuantity();
              this.addItem(this.props.dish);
            }}
          >
            Confirm
          </Button> */}
          <div className="row">
            {/* <Cart CartItems={this.state.dish}></Cart> */}
            <ModalExample />
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Serving;
