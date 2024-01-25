import "./App.css";
import ButtonPrimary from "./components/utils/ButtonPrimary";
import Greeting from "./components/utils/Greeting";
import ListCard from "./components/utils/ListCard";
function App() {
  
  const style = {
    backgroundColor: "red",
    width: "200px",
    height: "80px",
    fontSize: "10px",
    borderRadius: "10px"
   
}
  const handleClick = ()=>{
    console.log("Button Clicked");
  }
  const user = {
    username: "Heang",
    age: 22,
  };
  const { username, age } = user;
  console.log("User info" + username, age);
  return (
    <>
    <Greeting isLoggedIn={false}/>
    <ListCard/>
      <ButtonPrimary
       title={"Logout"}
       handleClick={handleClick}
       styleParent={style}
      />
    </>
  );
}

export default App;
