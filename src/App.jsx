import { useState } from "react";
import puppyList from "./data";
import "./App.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
