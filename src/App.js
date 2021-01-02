import React, { useState } from 'react';

import styles from './App.module.css';

import List from './List';
import Details from './Details';

function App() {
  const [id, setId] = useState(undefined);

  const onClickItem = (id) => {
    setId(id);
  };

  const onClickBack = () => {
    setId(undefined);
  };

  return (
    <div className={styles.app}>
      <div
        className={
          id === undefined
            ? [styles.app__view, styles.app__list].join(' ')
            : [styles.app__view, styles.app__list, styles['app__list--move']].join(' ')
        }
      >
        <List onClick={onClickItem} />
      </div>
      <div
        className={
          id === undefined
            ? [styles.app__view, styles.app__details].join(' ')
            : [styles.app__view, styles.app__details, styles['app__details--move']].join(' ')
        }
      >
        <Details id={id} onClick={onClickBack} />
      </div>
    </div>
  );
}

export default App;
