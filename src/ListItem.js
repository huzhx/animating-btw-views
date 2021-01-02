import React from 'react';

import styles from './ListItem.module.css';

const ListItem = ({ id, onClick }) => {
  const handleClick = (event) => {
    const id = event.target.id;
    onClick(id);
  };
  return (
    <div className={styles.list_item} id={id} onClick={handleClick}>
      Item {id}
    </div>
  );
};

export default ListItem;
