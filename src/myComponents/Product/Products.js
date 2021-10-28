import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid } from '@mui/material'
import { useParams } from "react-router-dom"


import { ProductItem } from '..'

export default function Products({token}) {

  const slug = useParams()
  const [prods, setProds] = useState([])
  let id = ''
  if (slug.subcat !== undefined) {
    id = slug.subcat
  }

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/prod/${id}`, {headers: {Authorization: `Token ${token}`}})
      .then(res => {
        setProds(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {prods.map((i) => {
          return <ProductItem prod={i} key={i.id} />
        })}
      </Grid>
    </main>
  )
}

