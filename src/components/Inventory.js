import React from 'react';
import DashboardCardList from './InventoryCardList';
import DashboardCardForm from './InventoryCardForm';

const Inventory = ({ items }) => {
  return (
    <div className="dashboard-inventory">
      <h3>Inventory</h3>
      <DashboardCardList items={items} />
      <DashboardCardForm />
    </div>
  );
};

export default Inventory;
