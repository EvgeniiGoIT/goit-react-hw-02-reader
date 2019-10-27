import React from 'react';
import T from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ itemsLength, indexValue }) => (
  <p className={styles.counter}>
    {indexValue}/{itemsLength}
  </p>
);

Counter.T = {
  itemsLength: T.number.isRequired,
  indexValue: T.number.isRequired,
};
export default Counter;
