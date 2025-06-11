import React, { useState } from 'react';
import styles from './OnChange.module.css'

function MyComponent() {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState(false);

  const [comment, setComment] = useState('');

  const [payment, setPayment] = useState('');
  const [paymentError, setPaymentError] = useState(false);

  const [shipping, setShipping] = useState('Delivery');
  const [address, setAddress] = useState('');
  const [submit, setSubmit] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);

    if (event.target.value.trim()) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);

    if (event.target.value) {
      setQuantityError(false);
    } else {
      setQuantityError(true);
    }
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);

    if (event.target.value) {
      setPaymentError(false);
    } else {
      setPaymentError(true);
    }
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  //NEED PA AYUSIN, DI KO PA ALAM KUNG PAANO ISSYNC YUNG CHANGES OR CONDITION NA BAWAL MAGSUBMIT KAPAG DI PA KUMPLETO
  function handleSubmitChange(event) {
    if(name.trim()){
      setNameError(false);
    } else {
      setNameError(true);
    }
    
    // Bakit ayaw gumana ng error message pag naka true, yung name lang yung gumagana
    if(quantity) {
      setQuantityError(false);
    } else {
      setQuantityError(true);
    }

    if(payment) {
      setPaymentError(false);
    } else {
      setPaymentError(true);
    }

    return;
  }

  return (
    <div className={styles.container}>

      <div className={styles.orderFormContainer}>
        <p className={styles.orderForm}><b>ORDER FORM</b></p>

        {/* Name Input */}
        <input
          className={styles.nameInput}
          value={name}
          onChange={handleNameChange} />

        {nameError && <p className={styles.errorMessage}>Please enter your name.</p>} 

        <p><strong>Name:</strong> {name}</p>

        <input
          className={styles.quantityInput}      
          value={quantity}
          type='number'
          onChange={handleQuantityChange} />

        {quantityError && <p className={styles.errorMessage}>Please enter a quantity more than 0.</p>}

        <p><strong>Quantity:</strong> {quantity}</p>

        <input
          className={styles.commentInput}      
          value={comment}
          placeholder='Enter delivery instruction'
          onChange={handleCommentChange} />
        <p><strong>Comment:</strong> {comment}</p>

        <select
          className={styles.paymentMenu}      
          value={payment}
          onChange={handlePaymentChange}
        >
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>

        {paymentError && <p  className={styles.errorMessage}>Please select a payment.</p>}

        <p><strong>Payment:</strong> {payment}</p>

        <input
          className={styles.addressInput}
          value={address}
          placeholder='Enter your address'
          onChange={handleAddressChange}
        />
        <p><strong>Address:</strong> {address}</p>

        <label>
          <input
          className={styles.pickupButton}
          type="radio" 
          value='Pick Up'
                // kapag yung checked is true, mattrigger yung callback function
                checked={shipping === 'Pick Up'}
                onChange={handleShippingChange}/>
          Pick Up
        </label>

        <br />

        <label>
          <input
          className={styles.deliveryButton}
          type="radio" value='Delivery'
                checked={shipping === 'Delivery'}
                onChange={handleShippingChange}/>
          Delivery
        </label>

        <p><strong>Shipping:</strong> {shipping}</p>

        {/* FOR SUBMIT BUTTON */}
        <button
        className={styles.submitButton}
        onClick={handleSubmitChange}><strong>Submit</strong></button>
        
        {setSubmit }
      </div>

    </div>
    
  );

}

export default MyComponent;