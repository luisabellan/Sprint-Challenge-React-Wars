import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StarWars.css";

function Card(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  //console.log(data);

   data.map((character, index) => {
    return (
      <div className="container">
        <h1 className="character" key={index}>{character.name}</h1>
      </div>
    );
  });
}

export default Card;
