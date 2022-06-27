import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, newToyToggle, setNewToyToggle }) {
  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard 
        key={toy.id} toy={toy} newToyToggle={newToyToggle} setNewToyToggle={setNewToyToggle}/>
    })}</div>
  );
}

export default ToyContainer;
