import React from 'react';
import T from 'prop-types';
import styles from './Publications.module.css';

const Publication = ({ title, text }) => (
  <article className={styles.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.T = {
  title: T.string.isRequired,
  text: T.string.isRequired,
};
export default Publication;
