import React from 'react';
import styles from '../stylesheets/variants.module.sass';
import Sizes from './Sizes';

export default function Variants({
  color,
  size,
  variants,
  selectedSize,
  handleClick,
  clickSize,
  selectedItem,
}) {
  return (
    <div>
      <div className={styles.color_title}>COLOUR:</div>
      <div className={styles.color_name}>{color}</div>
      <div className={styles.color_pic}>
        {variants &&
          variants.map(v => (
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(v)}
              key={v.color}
              src={v.imagePath}
              alt=""
            />
          ))}
      </div>
      <div className={styles.sizes}>
        <div className={styles.size_title}>SIZES:</div>
        <div className={styles.size_name}>
          <Sizes
            selectedItem={selectedItem}
            sizes={size}
            selectedSize={selectedSize}
            clickSize={clickSize}
          />
        </div>
      </div>
    </div>
  );
}
