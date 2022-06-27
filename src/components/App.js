import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]) // Toys to display

  const [nameValue, setNameValue] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [newToyToggle, setNewToyToggle] = useState(false) // use for dependency array, will rerender when value is changed

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then(src => setToys(src))
  }, [newToyToggle])



  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        nameValue={nameValue}
        setNameValue={setNameValue}
        imageValue={imageValue}
        setImageValue={setImageValue}
        newToyToggle={newToyToggle}
        setNewToyToggle={setNewToyToggle}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} newToyToggle={newToyToggle} setNewToyToggle={setNewToyToggle}/>
    </>
  );
}

export default App;
