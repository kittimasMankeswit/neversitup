import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [formList, setFormList] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
      setFormList(response.data)
    });
    fetch('https://api.github.com/users/kittimasmankeswit')
      .then(res => res.json())
      .then(data => {
        console.log("datadatadata",data)
      })
  }, []);

  console.log("formListformListformList", formList)
  return (
    <div className="App">
      {/* {
        formList.forms?.map(item => {
          console.log("itemitemitem", item)
          return (
            <div>
              {item.name}
            </div>
          )
        })
      }
      {
        <img src={formList.sprites.back_default} />
      } */}
    </div>
  );
}

export default App;
