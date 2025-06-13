import { useState } from "react";
import styles from './TodoApp.module.css';

function ToDoApp() {
  const [newItem, setNewItem] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleNewItemChange(event) {
    setNewItem(event.target.value);
  }

  function handleAddItemChange() {
    setTodoItems(prevTodoItems => [...prevTodoItems, newItem]);
    setNewItem('');
  }

  function handleDeleteItem(index) {
    setTodoItems(prevTodoItems => prevTodoItems.filter((__, i) => i !== index));
  }

  function handleIsEditing(index) {
    setIsEditing(true);
    setEditIndex(index)
    setEditItem(todoItems[index])
  }

  function handleEditItem(event) {
    setEditItem(event.target.value);
  }

  function handleEditSubmit(editIndex) {
    const updatedItems = [...todoItems];
    updatedItems[editIndex] = editItem;

    setTodoItems(updatedItems);

    setIsEditing(false);
    setEditIndex(null);
  }

  function handleEditCancel() {
    setIsEditing(false);
  }

  return(
    <div className={styles.container}>

      <h1>Todo App</h1>

      <input
        type="text"
        value={newItem}
        onChange={handleNewItemChange}
      />

      <button 
        className={styles.addButton}
        onClick={handleAddItemChange}>Add</button> <br />

      {todoItems.length > 0 && (
        <ul>

          {todoItems.map((item, index) => (
            <li key={index}>

              {item}

              <button
                className={styles.deleteButton} 
                onClick={() => handleDeleteItem(index)}>Delete</button>

              <button
                className={styles.editButton} 
                onClick={() => handleIsEditing(index)}>Edit</button>

              {isEditing && editIndex === index && (
                <div className={styles.editInput}>
                  <input
                    type="text"
                    value={editItem}
                    onChange={handleEditItem}
                  /> <br />

                  <div className={styles.buttonContainer}>
                    <button 
                      className={styles.cancelButton}
                      onClick={handleEditCancel}>
                        Cancel
                    </button>

                    <button
                      className={styles.cancelButton}
                      onClick={() => handleEditSubmit(index)}>
                        Confirm
                    </button> <br />
                  </div>

                </div>
                
              )}

            </li>))}

        </ul>)}

    </div>
  );
}

export default ToDoApp;