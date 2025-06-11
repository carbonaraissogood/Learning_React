// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx'
// import Card from './Card.jsx';
import './styles/index.css';
// import Button from './Button1/Button.jsx';
// import Student from './Student';
// import UserGreeting from './UserGreeting/UserGreeting';
// import List from './List/List.jsx'
// import Button from './Button2/Button.jsx'
// import ProfilePicture from './ProfilePicture/ProfilePicture.jsx'
// import MyComponent from './MyComponent';
// import Counter from './Counter/Counter';
// import OnChange from './LearningOnChange/OnChange.jsx'
 import ToDoApp from './ToDoApp/ToDoApp';
 import ColorPicker from './ColorPicker/ColorPicker';

function App() {

  const fruits = [{id: 1, name: 'apple', calories: 95},
                  {id: 2, name: 'banana', calories: 45},
                  {id: 3, name: 'kiwi', calories: 105},
                  {id: 4, name: 'coconut', calories: 159}];
                      
  const vegetables = [{id: 1, name: 'potatoes', calories: 25},
                      {id: 2, name: 'carrot', calories: 45},
                      {id: 3, name: 'corn', calories: 65},
                      {id: 4, name: 'leek', calories: 19}];     
               
  return (
    <>
      {/* FIRST PART
      <Header />
      <Food />
      <Footer /> */}

      {/* SECOND PART
      <Card></Card> */}

      {/* THIRD PART 
      <Button></Button> */}

      {/* FOURTH PART 
      
      <Student
        name='Una'
        age={24}
        isStudent={true} >
      </Student>

      <Student
        name='Walter'
        age={30}
        isStudent={false} >
      </Student>

      <Student
        name='Elizabeth'
        age={42}
        isStudent={false} >
      </Student>

      <Student
        name='Wise'
        age={47}
        isStudent={false} >
      </Student>

      <Student
        name='Theodore' >
      </Student>

      <Student /> */}

      {/* FIFTH PART
      <UserGreeting
        isLoggedIn={true}
        username="Max" >
      </UserGreeting>

      <UserGreeting></UserGreeting> */}

      {/* <List></List> */}

      {/* SIXTH PART */}

      {/* SHORT CIRCUITING 
        Pwede gumamit ng ternary operator or if-else conditions
        Pero mas madali yung short circuiting since only when the condition is truthy na magrerender yung component
      */}

      {/* {fruits.length > 0 &&
        <List
          items = {fruits}
          category = 'Fruits'
        ></List>
      }

      {vegetables.length > 0 &&
        <List
          items = {vegetables}
          category = 'Vegetables'
        ></List>
      } */}

      {/* SEVENTH PART
      
      <Button></Button>

      <ProfilePicture></ProfilePicture> */}

      {/* EIGHT PART
      
      <MyComponent></MyComponent>
      <Counter></Counter> */}


      {/* NINTH PART
      <OnChange></OnChange> */}

      {/* <ToDoApp></ToDoApp> */}

      <ColorPicker></ColorPicker>

    </>
  );
}

export default App;
