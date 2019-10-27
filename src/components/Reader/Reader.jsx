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
  hendleDecrement = () => {
    const { indexValue } = this.state;
    if (indexValue > 1) {
      this.setState(prevState => ({
        indexValue: prevState.indexValue - 1,
      }));
    }
  };

  hendleIncrement = () => {
    const { indexValue } = this.state;
    const { items } = this.props;
    if (indexValue < items.length) {
      this.setState(prevState => ({
        indexValue: prevState.indexValue + 1,
      }));
    }
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
          onIncrement={this.hendleIncrement}
          onDecrement={this.hendleDecrement}
        />
        <Counter itemsLength={items.length} indexValue={indexValue} />
        <Publication title={title} text={text} />
      </div>
    );
  }
}

export default Reader;
