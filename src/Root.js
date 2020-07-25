import React from 'react';
import { connect } from 'react-redux';
import { fetchItems, addItem, deleteItem } from './actions';
import ShopList from './components/ShopList';
import ShopCart from './components/ShopCart';
import Inventory from './components/Inventory';

class Root extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    const { items } = this.props;
    console.log(items, this.props);

    return (
      <div className="dashboard-body">
        <ShopList items={items.items} />
        <ShopCart />
        <Inventory items={items.items} />
      </div>
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
