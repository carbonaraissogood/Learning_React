import { createContext, useState } from 'react';
import styles from './ComponentA.module.css'

import ComponentB from './ComponentB';

export const UserContext = createContext();


function ComponentA() {

  const [user, setUser] = useState('Max');

  return (
    <div className={styles.box}>
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>

      <UserContext.Provider value={user}>
        <ComponentB user={user}></ComponentB>
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA;