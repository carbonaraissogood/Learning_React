import styles from './ComponentA.module.css'

import ComponentC from './ComponentC';

function ComponentB() {
  return (
    <div className={styles.box}>
      <h1>ComponentB</h1>
      <ComponentC></ComponentC>
    </div>
  )
}

export default ComponentB;      