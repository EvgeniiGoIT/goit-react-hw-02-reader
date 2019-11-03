import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from './../Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
  };
  state = {
    indexValue: 1,
  };
  handleButton = type => {
    this.setState(prevState => {
      let { indexValue } = prevState;
      return {
        indexValue: type === 'increment' ? indexValue + 1 : indexValue - 1,
      };
    });
  };
  render() {
    const { items } = this.props;
    const { indexValue } = this.state;
    const { title, text } = items[indexValue - 1];
    return (
      <div className={styles.reader}>
        <Controls
          indexValue={indexValue}
          itemsLength={items.length}
          onIncrement={this.handleButton}
          onDecrement={this.handleButton}
        />
        <Counter itemsLength={items.length} indexValue={indexValue} />
        <Publication title={title} text={text} />
      </div>
    );
  }
}

export default Reader;
