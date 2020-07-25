import React from 'react';
import { useDispatch } from 'react-redux';
import { editItem, deleteItem, deleteAllCart } from '../actions';
import {
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

const itemEditValues = {
  name: '',
  price: '',
  imageUrl: '',
  description: '',
};

const DashboardCardList = ({ items }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    const result = window.confirm('Would you like to delete item?');
    if (result) {
      dispatch(deleteItem(id));
      dispatch(deleteAllCart(id));
    }
  };

  const editItemCart = (data) => {
    const result = window.confirm('Would you like to update item?');
    if (result) {
      Object.keys(itemEditValues).map((key, index) => {
        return itemEditValues[key] === ''
          ? (itemEditValues[key] = data[key])
          : itemEditValues[key];
      });
      dispatch(editItem(data._id, itemEditValues));
    } else {
      window.location.reload(false);
    }
  };

  const changeInput = (e) => {
    itemEditValues[e.target.name] = e.target.value;
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={item._id} className="dashboard-inventory__card">
            <div className="item-title">
              <FormControl variant="outlined" size="small" fullWidth={true}>
                <InputLabel htmlFor={`form-item-name-${index}`}>
                  Product name
                </InputLabel>
                <OutlinedInput
                  id={`form-item-name-${index}`}
                  required
                  onChange={(e) => changeInput(e)}
                  defaultValue={item.name}
                  name="name"
                  label="Product name"
                />
              </FormControl>
            </div>
            <div className="item-price">
              <FormControl variant="outlined" size="small" fullWidth={true}>
                <InputLabel htmlFor={`form-item-price-${index}`}>
                  Price
                </InputLabel>
                <OutlinedInput
                  id={`form-item-price-${index}`}
                  required
                  onChange={(e) => changeInput(e)}
                  defaultValue={item.price}
                  name="price"
                  label="Price"
                />
              </FormControl>
            </div>
            <div className="item-img-link">
              <FormControl variant="outlined" size="small" fullWidth={true}>
                <InputLabel htmlFor={`form-item-imageUrl-${index}`}>
                  Image url
                </InputLabel>
                <OutlinedInput
                  id={`form-item-imageUrl-${index}`}
                  required
                  onChange={(e) => changeInput(e)}
                  defaultValue={item.imageUrl}
                  name="imageUrl"
                  label="Image url"
                />
              </FormControl>
            </div>
            <div className="item-description">
              <FormControl variant="outlined" size="small" fullWidth={true}>
                <TextField
                  id={`form-item-description-${index}`}
                  label="Description"
                  required
                  multiline
                  rows={2}
                  variant="outlined"
                  onChange={(e) => changeInput(e)}
                  defaultValue={item.description}
                  name="description"
                />
              </FormControl>
            </div>
            <button
              type="button"
              className="btn-edit"
              onClick={() => editItemCart(item)}
            >
              Edit Product
            </button>
            <button
              type="button"
              className="btn-remove"
              onClick={() => removeItem(item._id)}
            >
              Remove Product
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DashboardCardList;
