import React from 'react';
import { Card, Button } from '@material-ui/core';

const ShopList = ({ items }) => {
  console.log(items);
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
                <Button variant="outlined">Add to Order</Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ShopList;
