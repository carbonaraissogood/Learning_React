import styles from './ComponentA.module.css'

import ComponentD from './ComponentD';

import { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentC() {

  const user = useContext(UserContext);

  return (
    <div className={styles.box}>
      <h1>ComponentC</h1>
      <h2>{`Hello again, ${user}`}</h2>
      <ComponentD></ComponentD>
    </div>
  )
}

export default ComponentC;