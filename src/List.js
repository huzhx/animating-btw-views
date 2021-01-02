import React from 'react';

import styles from './List.module.css';
import ListItem from './ListItem';

const List = ({onClick}) => {
  const items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(<ListItem id={i} key={i} onClick={onClick} />);
  }
  return <div className={styles.list}>{items}</div>;
};

export default List;
