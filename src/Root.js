import React from 'react';
import { connect } from 'react-redux';
import { fetchItems, fetchCart, addItem, deleteItem } from './actions';
import Spinner from './components/Spinner';
import Error from './components/Error';
import ShopList from './components/ShopList';
import ShopCart from './components/ShopCart';
import Inventory from './components/Inventory';

class Root extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
    dispatch(fetchCart());
  }

  render() {
    const { items } = this.props;
    // console.log(items, this.props);

    return (
      <>
        {items.pending ? (
          <Spinner />
        ) : (
          <div className="dashboard-body">
            {!items.error ? (
              <>
                <ShopList items={items.items} />
                <ShopCart cart={items.cart} />
                <Inventory items={items.items} />
              </>
            ) : (
              <Error />
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItems,
  addItem,
  deleteItem,
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
