import axios from 'axios';

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
      .get('http://localhost:4000/items')
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
      .post('http://localhost:4000/items', item)
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
      .put(`http://localhost:4000/items/${id}/`, item)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.data;
      })
      .then((res) => {
        const payloadValue = { id: id, editItem: res };
        dispatch(editTournamentSuccess(payloadValue));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

function editTournamentSuccess(tour) {
  return {
    type: EDIT_ITEM,
    payload: tour,
  };
}

export const deleteItem = (id) => {
  return (dispatch) => {
    axios
      .delete('http://localhost:4000/items/' + id)
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
