import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles['lds-ripple']}>
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
