import styles from './UserGreeting.module.css';
import PropTypes from 'prop-types';

function UserGreeting(props) {

  // if(props.isLoggedIn) {
  //   return <h2>Welcome {props.username}</h2>
  // }

  // return <h2>Please log in to continue</h2>

  const welcomeMessage = <h2 className={styles.welcomeMessage}>Welcome {props.username}</h2>;

  const loginPrompt = <h2 className={styles.loginPrompt}>Please login to continue</h2>;

  //Ternary Operator
  return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  name: "Guest"
}

export default UserGreeting;