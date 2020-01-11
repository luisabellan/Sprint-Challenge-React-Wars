import React, {useState,useEffect} from 'react';
import './App.css';
//import Card from "./components/Card"
import axios from "axios"
import styled from "styled-components"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => setData(res.data.results))
      .catch(err => console.log(err));
  }, []);

  console.log(data);




  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      
  {
    data.map((character, index) => {
     
      const NameH1 = styled.h1`


      color:green;
    
      `

      const HeightP = styled.p`

      color:orange;
    
      `
      const MassP = styled.p`

      color:purple;
    
      `
      const BirthYearP = styled.p`

      color:brown;
    
      `
      const EyeColorP = styled.p`


      color:blue;
      `

      return(
        <div className="container">
          <NameH1 className="character" key={index}>{character.name}</NameH1>
          <HeightP className="height">Height: {character.height} key={index}</HeightP>

          <MassP className="mass">Mass: {character.mass} key={index}</MassP>

          <BirthYearP className="birthyear">Birth Year: {character.birth_year} key={index}</BirthYearP>
          <EyeColorP className="eye-color">{character.eye_color} key={index}</EyeColorP>





        </div>
      )
      
    })
    
  
  }

      


    </div>
  );
}

export default App;
