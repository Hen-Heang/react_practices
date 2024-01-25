import './App.css';
import ButtonPrimary from './components/utils/ButtonPrimary';
function App() {
  const title = "check out";
  const handleClicked = ()=>{
    console.log("Button Clicked!");
  }
  const fruit = ["Apple", "Banana", "Orange"];
  const user = {
    username: "Heang",
    age: 22,
  }
  return (
    <>
 <ButtonPrimary title={title} handleClick={handleClicked} fruit={fruit} user={user}/>
    </>
  );
}

export default App;
