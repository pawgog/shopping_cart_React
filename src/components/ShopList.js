import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import { Card, Button } from '@material-ui/core';

const ShopList = ({ items }) => {
  const dispatch = useDispatch();
  const addCart = (item) => {
    const prodToAdd = Object.assign(
      {},
      {
        prod_id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        imageUrl: item.imageUrl,
      }
    );
    dispatch(addToCart(prodToAdd));
  };

  return (
    <div className="dashboard-shoplist">
      <h3>List of Products</h3>
      {items.map((item) => {
        return (
          <Card key={item._id} className="dashboard-shoplist__cards">
            <div className="dashboard-shoplist__card">
              <img src={item.imageUrl} alt="img" />
              <div className="dashboard-shoplist__details">
                <div className="dashboard-shoplist__details__title-item">
                  <h5>{item.name}</h5>
                  <span>{item.price}$</span>
                </div>
                <p>{item.description}</p>
                <Button variant="outlined" onClick={() => addCart(item)}>
                  Add to Order
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ShopList;
