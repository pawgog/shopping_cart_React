import React from 'react';
import { useDispatch } from 'react-redux';
import { sumShopCart, totalPayCart } from '../func/function';
import { deleteCart } from '../actions';
import { Button } from '@material-ui/core';

const ShopCart = ({ cart }) => {
  const dispatch = useDispatch();
  const cartList = sumShopCart(cart);
  const deleteFromCart = (id) => {
    dispatch(deleteCart(id));
  };
  return (
    <div className="dashboard-shopcart">
      <h3>Shopping Cart</h3>
      {cartList.map((prod) => {
        return (
          <div key={prod._id} className="dashboard-shopcart__card">
            <div className="title-card">{prod.name}</div>
            <div className="quantity">Quantity</div>
            <div className="card-price">{prod.price}$</div>
            <div className="quantity-sum">{prod.prod_quan}</div>
            <div className="btn-delete">
              <Button onClick={() => deleteFromCart(prod._id)}>X</Button>
            </div>
          </div>
        );
      })}
      <div className="dashboard-shopcart__total">
        Total: <span>{totalPayCart(cartList)}$</span>
      </div>
    </div>
  );
};

export default ShopCart;
