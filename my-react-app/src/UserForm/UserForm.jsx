import React, { useState } from 'react'; 
import styles from './UserForm.module.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  function handleUserFormChange(event) {
    const {name: input, value} = event.target;

    setFormData(prevData => ({...prevData, [input]: value}))
  }

  return (
    <div>

      <input
        name='name'
        type="text"
        value={formData.name}
        onChange={handleUserFormChange}
        placeholder='Enter your name'
      />

      <br />

      <input
        name='email'
        type="email"
        value={formData.email}
        onChange={handleUserFormChange}
        placeholder='Enter your email'
      />

      <p>Name: <strong>{formData.name}</strong></p>
      <p>Email: <strong>{formData.email}</strong></p>

    </div>
  )
}

export default UserForm;