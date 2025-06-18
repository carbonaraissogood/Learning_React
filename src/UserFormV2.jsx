import { useState } from "react";
import styles from './UserFormV2.module.css';

function UserFormV2() {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      age: 0,
      birthdate: '',
      address: '',
      middleName: '',
      suffix: ''
    }
)

  const [forms, setForms] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    birthdate: '',
    address: '',
    middleName: '',
    suffix: ''
  });

  const [isFNameFilled, setIsFNameFilled] = useState(true);
  const [isLNameFilled, setIsLNameFilled] = useState(true);
  const [isAddressFilled, setIsAddressFilled] = useState(true);
  const [isAgeFilled, setIsAgeFilled] = useState(true);
  const [isBirthdateFilled, setIsBirthdateFilled] = useState(true);

  const [isEligibleToSubmit, setIsEligibleToSubmit] = useState(false);
  const [isEligibleToEdit, setIsEligibleToEdit] = useState(false);

  // Add separate validation states for edit form
  const [isEditFNameFilled, setIsEditFNameFilled] = useState(true);
  const [isEditLNameFilled, setIsEditLNameFilled] = useState(true);
  const [isEditAddressFilled, setIsEditAddressFilled] = useState(true);
  const [isEditAgeFilled, setIsEditAgeFilled] = useState(true);
  const [isEditBirthdateFilled, setIsEditBirthdateFilled] = useState(true);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleFormDataChange(event) {
    const {name: input, value} = event.target;

    if (input === 'birthdate') {
      const inputDate = new Date(value);
      const today = new Date();

      today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate date comparison

      if (inputDate > today) {
        setFormData(prevData => ({
          ...prevData,
          birthdate: ''
        }));
        alert("Please enter a valid birth date (not a future date)");

        return;
      } 
      
      const age = calculateAge(inputDate, today);

      setFormData(prevData => ({
        ...prevData,
        birthdate: value,
        age: age
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [input]: value
      }));
    }

    switch(input) {
      case 'firstName':
        setIsFNameFilled(value.trim() !== '');
        console.log(isFNameFilled);
        break;
      case 'lastName':
        setIsLNameFilled(value.trim() !== '');
        break;
      case 'address':
        setIsAddressFilled(value.trim() !== '');
        break;
      case 'age':
        setIsAgeFilled(value > 0 && value.trim() !== '');
        break;
      case 'birthdate':
        setIsBirthdateFilled(value !== '');
        break;  
      default:
        break;
    }

    const isValid = 
                    formData.firstName.trim() !== '' &&
                    formData.lastName.trim() !== '' &&
                    formData.address.trim() !== '' &&
                    formData.age > 0 &&
                    formData.birthdate.trim() !== '';

    setIsEligibleToSubmit(isValid);
  }

  function calculateAge(birthdate, today) {
    const verifiedBirthdate = new Date(birthdate);

    let age = today.getFullYear() - verifiedBirthdate.getFullYear();
    const diffMonth = today.getMonth() - verifiedBirthdate.getMonth();
    const diffDay = today.getDate() - verifiedBirthdate.getDate();

    if (diffMonth < 0 || (diffMonth === 0 && diffDay < 0)) {
      age--;
    }

    console.log(`Age: ${age}`);

    return age;

    // setFormData(prevData => ({
    //   ...prevData, age: ageFromBirthdate
    // }));
  }

  function handleSubmit() {
    console.log(isEligibleToSubmit);

    if (isEligibleToSubmit) {
      setForms(prevForms => ([...prevForms, formData]));

      setFormData({
        firstName: '',
        lastName: '',
        age: 0,
        birthdate: '',
        address: '',
        middleName: '',
        suffix: ''
      });

      setIsEligibleToSubmit(false);

    } else {
      alert('Please fill out the required fields.');
    }

  }

  function handleDeleteForm(index) {
    setDeleteIndex(index);
    setIsDeleteModalOpen(true);
    setIsDeleting(true);
  }

  function confirmDelete(deleteIndex) {
    setForms(prevForms => prevForms.filter((__, index) => index !== deleteIndex));

    setIsDeleting(false);
  }

  function handleEditForm(index) {
    setEditIndex(index);
    setIsEditModalOpen(true);
    setIsEditing(true);

    setEditFormData(forms[index]);
  }

  function handleEditFormChange(event) {
    const { name: input, value } = event.target;
    
    if (input === 'birthdate') {
    const inputDate = new Date(value);
      const today = new Date();

      today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate date comparison

      if (inputDate > today) {
        setEditFormData(prevData => ({
          ...prevData,
          birthdate: ''
        }));
        alert("Please enter a valid birth date (not a future date)");

        return;
      } 
      
      const age = calculateAge(inputDate, today);

      setEditFormData(prevData => ({
        ...prevData,
        birthdate: value,
        age: age
      }));
    } else {
      setEditFormData(prevData => ({
        ...prevData,
        [input]: value
      }));
  }
    // Use separate validation states for edit form
    switch(input) {
      case 'firstName':
          setIsEditFNameFilled(value.trim() !== '');
          break;
      case 'lastName':
          setIsEditLNameFilled(value.trim() !== '');
          break;
      case 'address':
          setIsEditAddressFilled(value.trim() !== '');
          break;
      case 'age':
          setIsEditAgeFilled(value > 0 && value.trim() !== '');
          break;
      case 'birthdate':
        setIsEditBirthdateFilled(value !== '');
        break;
      default:
        break;
    }

    // Check validity using the current field value and existing edit form data
    const updatedEditFormData = {
      ...editFormData, [input]: value
    };

    const isEditValid = 
      updatedEditFormData.firstName.trim() !== '' &&
      updatedEditFormData.lastName.trim() !== '' &&
      updatedEditFormData.address.trim() !== '' &&
      updatedEditFormData.age > 0;

    console.log(isEditValid);                

    setIsEligibleToEdit(isEditValid);
  }

  function handleConfirmEdit(editIndex) {

    if (isEligibleToEdit) {
      const updatedForms = [...forms];

      updatedForms[editIndex] = editFormData;

      setForms(updatedForms);

      setIsEditing(false);
    }
  }

  return (
    <div>

      {/* USER FORM */}
      <div>
        <div className={styles.cardContainer}>
          <div className={styles.formWrapper}>

            <h1>User Form</h1>

            <div className={styles.inputGroup}>

              <div className={styles.nameInput}>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.firstName}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormDataChange}
                    placeholder="First Name"
                  />

                  {!isFNameFilled && (
                    <p className={styles.warning}>Please enter your first name.</p>
                  )}
                </div>

                <div className={styles.inputContainer}>

                  <input
                    className={styles.middleName}
                    type="text"
                    name="middleName"
                    placeholder="Middle Name (Optional)"
                    value={formData.middleName}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div  className={styles.inputContainer}>
                  <input
                    className={styles.lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleFormDataChange}
                  />

                  {!isLNameFilled && (
                    <p className={styles.warning}>Please enter your last name.</p>
                  )}
                </div>

                <div  className={styles.inputContainer}>
                  <input
                    className={styles.suffix}
                    type="text"
                    name="suffix"
                    placeholder="Suffix (Optional)"
                    value={formData.suffix}
                    onChange={handleFormDataChange}
                  />
                </div>

              </div>

              <div className={styles.ageAndBirthdate}>

                <div  className={styles.inputContainer}>
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleFormDataChange}
                  />

                  {!isAgeFilled && (
                    <p className={styles.warning}>Please enter your age.</p>
                  )}
                </div>

                <div  className={styles.inputContainer}>
                  <input
                    type="date"
                    name="birthdate"
                    placeholder="Enter your birthdate"
                    value={formData.birthdate}
                    onChange={handleFormDataChange}
                  />

                  {!isBirthdateFilled && (
                    <p className={styles.warning}>Please enter your birthdate.</p>
                  )}
                </div>
              </div>

              <div  className={styles.inputContainer}>
                <input
                  className={styles.address}
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleFormDataChange}
                />

                {!isAddressFilled && (
                  <p className={styles.warning}>Please enter your address.</p>
                )}
              </div>

              <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE OF USERS */}
      <div className={styles.tableContainer}>
          <h1>Table of Users</h1>

         {forms.length > 0 && (
            <div>
              {forms.map((form, index) => (
                <table>
                  <div>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>MiddleName</th>
                        <th>Last Name</th>
                        <th>Suffix</th>

                        <th>Age</th>
                        <th>Birthdate</th>
                        <th>Address</th>

                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr key={index}>
                        
                        <td>{form.firstName}</td>
                        <td>{form.middleName || 'N/A'}</td>
                        <td>{form.lastName}</td>
                        <td>{form.suffix || 'N/A'}</td>


                        <td>{form.age}</td>
                        <td>{form.birthdate}</td>
                        <td>{form.address}</td>

                        <td>
                          <button
                            className={styles.deleteButton}
                            onClick={() => handleDeleteForm(index)}>
                              Delete
                          </button>

                          <button
                            className={styles.editButton}
                            onClick={() => handleEditForm(index)}>
                              Edit
                          </button>
                        </td>

                      </tr>
                    </tbody>

                    {isDeleteModalOpen && isDeleting && index===deleteIndex && (
                      <div className={styles.modalOverlay}>

                        <div className={styles.modalContent}>
                          <p className={styles.confirmationMessage}>Are you sure you want to delete this user?</p>

                          <button className={styles.cancelButton} onClick={() => setIsDeleting(false)}>Cancel</button>
                          <button className={styles.confirmDeleteButton} onClick={() => confirmDelete(deleteIndex)}>Confirm</button>

                        </div>
                     </div>
                    )}

                    {isEditModalOpen && isEditing && index===editIndex && (
                      <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                          <div className={styles.modalInputGroup}>

                            <h1>Edit User Information</h1>

                            <div className={styles.inputGroup}>
                              <div className={styles.nameInput}>

                                <div className={styles.editContainer}>
                                  <input
                                    className={styles.firstName}
                                    type="text"
                                    name="firstName"
                                    value={editFormData.firstName}
                                    onChange={handleEditFormChange}
                                    placeholder="First Name"
                                  />

                                  {!isEditFNameFilled && (
                                    <p className={styles.warning}>Please enter your first name.</p>
                                  )}
                                </div>

                                <div className={styles.editContainer}>

                                  <input
                                    className={styles.MiddleName}
                                    type="text"
                                    name="middleName"
                                    placeholder="Middle Name (Optional)"
                                    value={editFormData.middleName}
                                    onChange={handleEditFormChange}
                                  />

                                </div>

                                <div  className={styles.editContainer}>
                                  <input
                                    className={styles.lastName}
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={editFormData.lastName}
                                    onChange={handleEditFormChange}
                                  />

                                  {!isEditLNameFilled && (
                                    <p className={styles.warning}>Please enter your last name.</p>
                                  )}
                                </div>

                                <div  className={styles.editContainer}>
                                  <input
                                    className={styles.suffix}
                                    type="text"
                                    name="suffix"
                                    placeholder="Suffix (Optional)"
                                    value={editFormData.suffixEdit}
                                    onChange={handleEditFormChange}
                                  />
                                </div>

                              </div>

                              <div className={styles.ageAndBirthdate}>

                                <div  className={styles.editContainer}>
                                  <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={editFormData.age}
                                    onChange={handleEditFormChange}
                                  />

                                  {!isEditAgeFilled && (
                                    <p className={styles.warning}>Please enter your age.</p>
                                  )}
                                </div>

                                <div  className={styles.editContainer}>
                                  <input
                                    type="date"
                                    name="birthdate"
                                    placeholder="Enter your birthdate"
                                    value={editFormData.birthdate}
                                    onChange={handleEditFormChange}
                                  />

                                  {!isEditBirthdateFilled && (
                                    <p className={styles.warning}>Please enter your birthdate.</p>
                                  )}
                                </div>
                              </div>

                              <div  className={styles.editContainer}>
                                <input
                                  className={styles.address}
                                  type="text"
                                  name="address"
                                  placeholder="Enter your address"
                                  value={editFormData.address}
                                  onChange={handleEditFormChange}
                                />

                                {!isEditAddressFilled && (
                                  <p className={styles.warning}>Please enter your address.</p>
                                )}
                              </div>
                            </div>
                          </div>

                          <button
                            className={styles.cancelEditButton} 
                            onClick={() => {
                              setIsEditing(false);
                              setIsEditFNameFilled(true)
                              setIsEditLNameFilled(true)
                              setIsEditAgeFilled(true)
                              setIsEditBirthdateFilled(true)
                              setIsEditAddressFilled(true)}}>
                              Cancel
                          </button>

                          <button className={styles.confirmEditButton} onClick={() => handleConfirmEdit(editIndex)}>Confirm</button>
                          
                        </div>
                     </div>
                    )}

                  </div>
                </table>
                
              ))}
            </div>
          )}
      </div>
    
    </div>
  )
}

export default UserFormV2;