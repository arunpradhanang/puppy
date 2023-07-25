import { useState } from "react";
import puppyList from "./data";
import "./App.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {featPupId}
      onClick={()=>{ setFeatPupId(puppy.id)}}
      {puppies.map((puppy) => {
        
        const featuredPup = puppies.find((pup)=> pup.id === featPupId)
        {()=>{console.log("puppy id: ", puppy.id)}}
        
        return (
          <p onClick={handleClick} key={puppy.id}
          >
            {puppy.name}
            
          </p>
        );
      })}
    </div>
  );
}

export default App;
