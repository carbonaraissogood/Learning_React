import { useState } from "react";

function ToDoApp() {
  const [isAdding, setIsAdding] = useState(false);
  const [addItem, setAddItem] = useState(['']);
  const [isSubmit, setIsSubmit] = useState(false);

  const [isDelete, setIsDelete] = useState(false);

  function handleIsAddingChange() {
    setIsAdding(true);
  }

  function handleAddItemChange(event) {
    setAddItem(event.target.value);
  }

  function handleSubmitChange() {
    setIsSubmit(true);
    setIsAdding(false);
    setIsDelete(true);
  }

  function handleIsDeleteChange() {
    setIsDelete(true);
    setAddItem('');
    // setIsDelete(false);

    
  }

  return(
    <div>

      <button onClick={handleIsAddingChange}>Add</button>

      {isAdding && (
        <div>
          <input
            type="text"
            value={addItem}
            onChange={handleAddItemChange}
          />

          <button 
            onClick={handleSubmitChange}>Submit
          </button> 

        </div>)
      }
      
      {isSubmit && (
        <div>

          <ul key='hello'>

            <h3>{addItem}</h3>

            {isDelete && <button onClick={handleIsDeleteChange}>
              Delete
            </button> }

          </ul>

        </div>
      )}

      



    </div>
  );
}

export default ToDoApp;