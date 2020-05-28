import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import Header from '../../../components/header/headerContainer';
import styles from './stylesheets/ordersHistory.module.sass';

export default function OrdersHistory(props) {
  const { userOrders } = props;

  const [state, setState] = React.useState({
    columns: [
      { title: 'Order ID', field: 'id', editable: 'never' },
      { title: 'Order Date', field: 'orderDateTime', editable: 'never' },
      { title: 'Product Title', field: 'title', editable: 'never' },
      { title: 'Product Price', field: 'price', editable: 'never' },
      { title: 'Quantity', field: 'quantity', editable: 'never' },
      { title: 'Size', field: 'size', editable: 'never' },
      { title: 'Total Sum $', field: 'totalSum', editable: 'never' },
    ],
    data: [{ id: '', orderDateTime: '', totalSum: '' }],
  });

  useEffect(() => {
    if (userOrders) {
      setState(prevState => {
        const data = userOrders;
        return { ...prevState, data };
      });
    }
  }, [userOrders]);

  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.content}>
        <div className={styles.box} style={{ display: 'block' }}>
          <div
            style={{
              // maxWidth: 'fit-content',
              position: 'sticky',
              zIndex: 1,
            }}
          >
            <MaterialTable
              title="Current Orders"
              columns={state.columns}
              data={state.data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
