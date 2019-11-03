import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const TYPE = {
  increment: 'increment',
  decrement: 'decrement',
};

const Controls = ({ indexValue, itemsLength, onIncrement, onDecrement }) => (
  <section className={styles.controls}>
    <button
      onClick={() => onDecrement(TYPE.decrement)}
      type="button"
      className={styles.button}
      disabled={indexValue === 1}
    >
      Назад
    </button>
    <button
      onClick={() => onIncrement(TYPE.increment)}
      type="button"
      className={styles.button}
      disabled={indexValue === itemsLength}
    >
      Вперед
    </button>
  </section>
);
Controls.T = {
  indexValue: T.number.isRequired,
  itemsLength: T.number.isRequired,
  onIncrement: T.func.isRequired,
  onDecrement: T.func.isRequired,
};
export default Controls;
