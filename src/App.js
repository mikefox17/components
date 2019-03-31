import React, { Component } from "react";
import "./App.css";
import OrderHistory from "../src/components/OrderHistory";
import orderhistory from "../src/orderhistory.json";

class App extends Component {
  state = {
    orderhistory
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <h1>TESTING 123</h1>
        </div>
        <div>
          {this.state.orderhistory.map(orderhistory => (
            <OrderHistory
              image={orderhistory.image}
              item={orderhistory.item}
              productID={orderhistory.productID}
              OrderDate={orderhistory.OrderDate}
              OrderQuantity={orderhistory.OrderQuantity}
              OrderCost={orderhistory.OrderCost}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
