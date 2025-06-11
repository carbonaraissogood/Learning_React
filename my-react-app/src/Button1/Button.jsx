import styles from './Button.module.css';

function Button() {

  //INLINE CSS METHOD - GOOD FOR MINIMAL STYLING
  // const styles = {
  //   backgroundColor: "pink",
  //   color: "white",
  //   padding: "10px 20px",
  //   borderRadius: "5px",
  //   border: "none",
  //   cursor: "pointer"
  // }

  return (

    //INLINE CSS METHOD - GOOD FOR MINIMAL STYLING
    // <button style={styles}>
    //   Click me!
    // </button>

    //MODULE CSS METHOD - GOOD FOR INDIVIDUAL COMPONENT SYLING
    <button className={styles.button}>
      Click me!
    </button>
  );
}

export default Button;