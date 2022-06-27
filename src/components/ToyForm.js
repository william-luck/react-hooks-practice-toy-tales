import React from "react";

function ToyForm({ nameValue, setNameValue, imageValue, setImageValue, newToyToggle, setNewToyToggle  }) {

  function handleNameChange(event) {
    setNameValue(event.target.value)
  }

  function handleImageChange(event) {
    setImageValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();

    const newToy = {
      name: nameValue,
      image: imageValue,
      likes: 0,
    }
    
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newToy),
  })
      .then(response => response.json())
      .then(() => setNewToyToggle(!newToyToggle))

    


  }





  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={nameValue}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={imageValue}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
