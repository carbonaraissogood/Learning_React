import styles from './List.module.css';
import PropTypes from 'prop-types';

function List(props) { 
  // const fruits = [
  //   {id: 1, name: 'apple', calories: 95},
  //   {id: 2, name: 'banana', calories: 45},
  //   {id: 3, name: 'kiwi', calories: 105},
  //   {id: 4, name: 'coconut', calories: 159}
  // ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //REVERSE ALPHABETICAL

  //fruits.sort((a, b) => a.calories - b.calories) //NUMERIC ORDER
  //fruits.sort((a, b) => b.calories - a.calories) //REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(lowCalFruit => lowCalFruit.calories < 100);
  // const highCalFruits = fruits.filter(highCalFruit => highCalFruit.calories > 100);

  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => 
    <li key={item.id}>

      {item.name}: &nbsp;
      <b>{item.calories}</b>

    </li> );

  return(
    <>
      <h3 className={styles.listCategory}>{category}</h3>
      <ol className={styles.listItems}>{listItems}</ol>
    </>
  );
}

//Ito yung pangset-up ng type of props na tatanggapin ng function
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number})),

  category: PropTypes.string
}

//Ito yung sumasalo kapag want magrender pero may kulang na props or walang props at all
List.defaultProps = {
  items: [],
  category: "Category"
}

export default List;