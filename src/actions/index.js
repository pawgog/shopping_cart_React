import axios from 'axios';

const SERVER_URL = 'https://shoping-cart-342.herokuapp.com'

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsPending());
    axios
      .get(`${SERVER_URL}/items`)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchItemsSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(fetchItemsError(err));
      });
  };
};

export const addItem = (item) => {
  return (dispatch) => {
    axios
      .post(`${SERVER_URL}/items`, item)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        dispatch(addItemSuccess(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function addItemSuccess(item) {
  return {
    type: ADD_NEW_ITEM,
    payload: item,
  };
}

export const editItem = (id, item) => {
  return (dispatch) => {
    axios
      .put(`${SERVER_URL}/items/${id}/`, item)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        const payloadValue = { id: id, editItem: res };
        dispatch(editItemSuccess(payloadValue));
      })
      .then(() => {
        dispatch(fetchItems())
      })
      .then(() => {
        dispatch(fetchCart())
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function editItemSuccess(item) {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
}

export const deleteItem = (id) => {
  return (dispatch) => {
    axios
      .delete(`${SERVER_URL}/items/${id}`)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        dispatch(deleteItemSuccess(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function deleteItemSuccess(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}

function fetchItemsPending() {
  return {
    type: FETCH_ITEMS_PENDING,
  };
}

function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
}

function fetchItemsError(error) {
  return {
    type: FETCH_ITEMS_ERROR,
    error: error,
  };
}

//// Shopping Cart
export const FETCH_CART_PENDING = 'FETCH_CART_PENDING';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
export const ADD_TO_CART = 'ADD_TO_CART';
export const EDIT_CART = 'EDIT_CART';
export const DELETE_CART = 'DELETE_CART';
export const DELETE_ALL_CART = 'DELETE_ALL_CART';

export const fetchCart = () => {
  return (dispatch) => {
    axios
      .get(`${SERVER_URL}/cart`)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCartSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(fetchCartError(err));
      });
  };
};

function fetchCartSuccess(cart) {
  return {
    type: FETCH_CART_SUCCESS,
    payload: cart,
  };
}

function fetchCartError(error) {
  return {
    type: FETCH_CART_ERROR,
    error: error,
  };
}

export const addToCart = (cart) => {
  return (dispatch) => {
    axios
      .post(`${SERVER_URL}/cart`, cart)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        console.log(res);
        dispatch(addCartSuccess(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function addCartSuccess(cart) {
  return {
    type: ADD_TO_CART,
    payload: cart,
  };
}

export const editCart = (id, cart) => {
  return (dispatch) => {
    axios
      .put(`${SERVER_URL}/cart/${id}/`, cart)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then(() => {
        const payloadValue = { id: id, editCartPrice: cart };
        dispatch(editCartSuccess(payloadValue));
      })
      .then(() => {
        dispatch(fetchItems())
      })
      .then(() => {
        dispatch(fetchCart())
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function editCartSuccess(cart) {
  return {
    type: EDIT_CART,
    payload: cart,
  };
}

export const deleteCart = (id) => {
  return (dispatch) => {
    axios
      .delete(`${SERVER_URL}/cart/${id}`)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        dispatch(deleteCartSuccess(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function deleteCartSuccess(id) {
  return {
    type: DELETE_CART,
    payload: id,
  };
}

export const deleteAllCart = (id) => {
  return (dispatch) => {
    axios
      .delete(`${SERVER_URL}/cart/${id}`)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        dispatch(deleteAllCartSuccess(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function deleteAllCartSuccess(id) {
  return {
    type: DELETE_ALL_CART,
    payload: id,
  };
}
