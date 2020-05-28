import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../stylesheets/table.module.sass';

export default function BagTable({ items, handleClick }) {
  console.log('ITEMS', items);
  return (
    <div className={styles.outbox}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Photos</th>
            <th>Title</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {Object.keys(items).map(id => (
            // table row
            <tr key={id}>
              {/* pic */}
              <td>
                <div className={styles.pic_outbox}>
                  <img src={items[id].item.imagePath} alt="" />
                </div>
              </td>
              {/* title */}
              <td>
                <div className={styles.title_outbox}>
                  <div className={styles.title}>{items[id].item.title}</div>
                  <div className={styles.id_title}>Id:</div>
                  <div className={styles.id}>{items[id].item.id}</div>
                  <div className={styles.id_title}>Color:</div>
                  <div className={styles.id}>{items[id].item.color}</div>
                </div>
              </td>
              {/* size */}
              <td>{items[id].item.size}</td>
              {/* qty */}
              <td>
                <div className={styles.qty_outbox}>
                  {items[id].item.quantity === 0 ? (
                    <Button
                      variant="outline-secondary"
                      className={styles.btn}
                      disabled
                    >
                      +
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      className={styles.btn}
                      onClick={() =>
                        handleClick(
                          items[id].item.id,
                          items[id].item.size,
                          items[id].item.variantId,
                          true,
                          false
                        )
                      }
                    >
                      +
                    </Button>
                  )}

                  {items[id].qty}
                  <Button
                    variant="outline-secondary"
                    className={styles.btn}
                    onClick={() =>
                      handleClick(
                        items[id].item.id,
                        items[id].item.size,
                        items[id].item.variantId,
                        false,
                        true
                      )
                    }
                  >
                    -
                  </Button>
                </div>
              </td>
              {/* price */}
              <td>{items[id].price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
