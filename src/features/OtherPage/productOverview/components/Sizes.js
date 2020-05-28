import { Dropdown, DropdownButton } from 'react-bootstrap';
import React from 'react';
import styles from '../stylesheets/sizes.module.sass';

export default function Sizes({
  sizes,
  selectedSize,
  clickSize,
  selectedItem,
}) {
  return (
    <div>
      <DropdownButton
        disabled={!selectedItem}
        className={styles.btn}
        title={selectedSize || (sizes && sizes[0])}
      >
        {sizes && sizes.length > 0
          ? sizes.map(s => (
              <Dropdown.Item
                className={styles.item}
                onClick={() => clickSize(s)}
                key={s}
              >
                {s}
              </Dropdown.Item>
            ))
          : 'no more sizes'}
      </DropdownButton>
    </div>
  );
}
