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
}