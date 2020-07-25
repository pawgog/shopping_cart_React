import React from 'react';
import { Button } from '@material-ui/core';

class ShopCart extends React.Component {
  render() {
    return (
      <div className="dashboard-shopcart">
        <h3>Shopping Cart</h3>
        <div className="dashboard-shopcart__card">
          <div className="title-card">Title of item 1</div>
          <div className="quantity">Quantity</div>
          <div className="card-price">24$</div>
          <div className="quantity-sum">2</div>
          <div className="btn-delete"><Button>X</Button></div>
        </div>
        <div className="dashboard-shopcart__card">
        <div className="title-card">Title of item 2</div>
          <div className="quantity">Quantity</div>
          <div className="card-price">30$</div>
          <div className="quantity-sum">1</div>
          <div className="btn-delete"><Button>X</Button></div>
        </div>
        <div className="dashboard-shopcart__total">
          Total: <span>82</span>
        </div>
      </div>
    );
  }
}

export default ShopCart;
