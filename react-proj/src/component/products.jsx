import React, { Component } from "react";
import Product from "./product";

class Products extends React.Component {
  render() {
    return (
      <div className="border border-primary m-4 position-relative">
        {this.props.products.map((p, index) => (
          <Product
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            id={p.id}
            key={index}
            productName={p.productName}
            count={p.count}
          />
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary m-4 position-absolute end-0"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Products;
