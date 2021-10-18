import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Product, Navbar } from './myComponents';
import { Grid } from '@mui/material';
import {ThemeProvider} from "./Hooks/ThemeContext"

function App() {
  const [prod, setProd] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/task/`)
      .then(res => {
        setProd(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Grid container justify="center" spacing={4}>
          {prod.map((i) => {
            return <Product prod={i} key={i.id}/>
          })}
        </Grid>
      </main>
    </ThemeProvider>  
  );
}

export default App;
