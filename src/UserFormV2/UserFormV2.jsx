function UserFormV2() {
  // Remove these redundant states
  // const [isEditFNameFilled, setIsEditFNameFilled] = useState(true);
  // const [isEditLNameFilled, setIsEditLNameFilled] = useState(true);
  // const [isEditAddressFilled, setIsEditAddressFilled] = useState(true);
  // const [isEditAgeFilled, setIsEditAgeFilled] = useState(true);
  // const [isEditBirthdateFilled, setIsEditBirthdateFilled] = useState(true);

  function handleEditFormChange(event) {
    const { name, value } = event.target;
    
    setEditFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Use the existing validation states
    switch(name) {
      case 'firstName':
        setIsFNameFilled(value.trim() !== '');
        break;
      case 'lastName':
        setIsLNameFilled(value.trim() !== '');
        break;
      case 'address':
        setIsAddressFilled(value.trim() !== '');
        break;
      case 'age':
        setIsAgeFilled(value > 0);
        break;
      case 'birthdate':
        setIsBirthdateFilled(value.trim() !== '');
        break;
    }
  }

  function handleFormDataChange(event) {
    const { name, value } = event.target;
    
    if (name === 'birthdate') {
      const inputDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate date comparison

      if (inputDate > today) {
        setFormData(prevData => ({
          ...prevData,
          birthdate: ''
        }));
        alert("Please enter a valid birth date (not a future date)");
      } else {
        setFormData(prevData => ({
          ...prevData,
          birthdate: value
        }));
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  }
}