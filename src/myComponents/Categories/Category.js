import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTheme } from '../../Hooks/useThemeContext'
import useStyles from './styles'
import { Link } from 'react-router-dom';



export default function Category({ name, slug }) {
    const classes = useStyles();
    const [subcatlist, setSubcatlist] = useState([])


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/subcats/${slug}`)
            .then(res => {
                setSubcatlist(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [slug])

    let themestyle = {};

    if (useTheme()) {
        themestyle = { background: '#000000', color: '#FFFFFF' }
    }
    else {
        themestyle = { color: '#000000', background: '#FFFFFF' }
    }


    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root} style={themestyle}>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom style={themestyle}>
                            {name}
                        </Typography>
                    </div>
                    <List>
                        {Object.values(subcatlist).map((i) => {
                            const link = '/categories/' + i.short;
                            return (
                                <ListItem disablePadding key={i.id}>
                                    <ListItemButton component={Link} to={link}>
                                        <ListItemText primary={i.name} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </CardContent>
            </Card>
        </Grid>
    )
}