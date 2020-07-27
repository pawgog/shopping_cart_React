import React from 'react';
import DashboardCardList from './InventoryCardList';
import DashboardCardForm from './InventoryCardForm';

const Inventory = ({ items, fetchItemsAPIFunc, fetchCartAPIFunc, editCartFunc }) => {
  return (
    <div className="dashboard-inventory">
      <h3>Inventory</h3>
      <DashboardCardList items={items} fetchItemsAPIFuncChild={fetchItemsAPIFunc} fetchCartAPIFuncChild={fetchCartAPIFunc} editCartFuncChild={editCartFunc} />
      <DashboardCardForm />
    </div>
  );
};

export default Inventory;
