import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

const defaultValues = {
  name: '',
  price: '',
  imageUrl: '',
  description: ' ',
};

const DashboardCardForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmitForm = (data) => {
    reset({ defaultValues });
    dispatch(addItem(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="dashboard-inventory__card"
    >
      <div className="item-title">
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="form-item-name">Product name</InputLabel>
          <Controller
            as={OutlinedInput}
            id="form-item-name"
            control={control}
            required
            defaultValue={defaultValues.name}
            name="name"
            label="Product name"
          />
        </FormControl>
      </div>
      <div className="item-price">
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="form-item-price">Price</InputLabel>
          <Controller
            as={OutlinedInput}
            id="form-item-price"
            control={control}
            required
            defaultValue={defaultValues.price}
            name="price"
            label="Price"
          />
        </FormControl>
      </div>
      <div className="item-img-link">
        <FormControl variant="outlined" size="small" fullWidth={true}>
          <InputLabel htmlFor="form-item-img">Image url</InputLabel>
          <Controller
            as={OutlinedInput}
            id="form-item-img"
            control={control}
            required
            defaultValue={defaultValues.imageUrl}
            name="imageUrl"
            label="Image url"
          />
        </FormControl>
      </div>
      <div className="item-description">
        <FormControl variant="outlined" size="small" fullWidth={true}>
          <Controller
            as={TextField}
            id="form-item-description"
            label="Description"
            required
            multiline
            rows={2}
            variant="outlined"
            control={control}
            defaultValue={defaultValues.description}
            name="description"
          />
        </FormControl>
      </div>
      <button type="submit" className="btn-invent">
        Add Product
      </button>
    </form>
  );
};

export default DashboardCardForm;
