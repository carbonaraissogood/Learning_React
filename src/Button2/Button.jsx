import styles from './Button.module.css'

function Button() {

  const handleClick = (e) => e.target.textContent = 'OUCH! :<';

  // let count = 0;

  // const handleClick = (name) => {
  //   if(count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name}, stop clicking me!`);
  //   }
  // };

  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  return (

    //Kailangan lagyan ng parenthesis or ilagay sa loob ng function para hindi siya automatically maiinvoke pagka-run nung program, ginagawa yung paglalagay sa loob ng function para maghihintay muna siya ng event before gawin or i-execute yung taga-handle ng event

    // <button onClick={() => handleClick2('Max')}>
    //   Click me ^.^
    // </button>

    //Ito yung button for if-else na handleClick function na may props na name
    // <button
    //   onClick={() => handleClick('Max')}>
    //     Click me!
    // </button>

    <button onDoubleClick={(e) => handleClick(e)}>CLICK ME!</button>
  )
}

export default Button;