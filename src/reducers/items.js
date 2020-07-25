import {
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  ADD_NEW_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  ADD_TO_CART,
  DELETE_CART,
  DELETE_ALL_CART,
} from '../actions';

const initialState = {
  pending: true,
  items: [],
  cart: [],
  error: null,
  errorCart: null,
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload,
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case ADD_NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === action.payload.id
              ? (item = action.payload.editItem)
              : item
          ),
        ],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        errorCart: action.error,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case DELETE_ALL_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.prod_id !== action.payload),
      };
    default:
      return state;
  }
}
