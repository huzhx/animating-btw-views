import React from 'react';

import styles from './Details.module.css';

const Details = ({ id, onClick }) => {
  return (
    <div className={styles.details}>
      <div>Details view for Item {id}</div>
      <button onClick={onClick}>Back</button>
    </div>
  );
};

export default Details;
