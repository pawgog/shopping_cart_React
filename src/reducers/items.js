import {
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  ADD_NEW_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from '../actions';

const initialState = {
  pending: false,
  items: [],
  error: null,
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
        items: [...state.items, action.payload],
      };
    case EDIT_ITEM:
      return {
        items: [
          ...state.items.map((item) =>
            item.id === action.payload.id
              ? (item = action.payload.editItem)
              : item
          ),
        ],
      };
    case DELETE_ITEM:
      console.log(state.items, action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
}
