import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid } from '@mui/material'
import Category from './Category'

export default function Categories() {
    const [catlist, setCatlist] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cats/`)
            .then(res => {
                setCatlist(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <Grid container justify="center" spacing={4}>
            {Object.keys(catlist).map((i) => {
                return <Category name={catlist[i]} slug={i}/>
            })}
        </Grid>
    )
}