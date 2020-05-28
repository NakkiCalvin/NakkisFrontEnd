import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../../components/header/headerContainer';
import styles from './stylesheets/shoppingBag.module.sass';
import Table from './components/Table';
import jumpTo from '../../../modules/Navigation';

export default function ShoppingBag(props) {
  const { totalPrice, items } = props.cart;
  const { postCart } = props;
  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title.concat(' my-2')}>Shopping Bag</div>
          <div className={styles.table}>
            <Table
              items={items || {}}
              handleClick={(pid, size, variantId, increase, decrease) =>
                postCart(pid, size, variantId, increase, decrease)
              }
            />
          </div>
          <div className={styles.process_box}>
            <div className={styles.total}>Total: ${totalPrice}</div>
            <div className="my-3">
              <Button
                disabled={totalPrice === 0}
                onClick={() => jumpTo('/checkout')}
                variant="primary"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
