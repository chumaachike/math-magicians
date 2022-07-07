import React from 'react';
import Header from './Header';
import styles from './Quote.module.css';

function Quote() {
  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.text}>
        Without mathematics, there’s nothing you can do. Everything around you is mathematics.
        Everything around you is numbers.
        <span className={styles.name}>-Shakuntala Devi</span>
      </p>
    </div>
  );
}

export default Quote;
