import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from "./styles"
import { useTheme } from '../../Hooks/ThemeContext'

export default function ({ prod }) {
    const classes = useStyles();

    return (
        <>{useTheme() ? 
        
        <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root} style={{background: '#000000', color:'#FFFFFF'}}>
                <CardMedia className={classes.media} image={prod.product_img} title={prod.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom style={{color:'#FFFFFF'}}>
                            {prod.name}
                        </Typography>
                        <Typography variant='h7'>
                            ${prod.price}
                        </Typography>
                    </div>
                    <Typography variant="h7" color="#FFFFFF">{prod.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Card">
                        <AddShoppingCart  style={{color:"#FFFFFF"}}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid> 
        
        : 
        
        <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={prod.product_img} title={prod.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom>
                            {prod.name}
                        </Typography>
                        <Typography variant='h7'>
                            ${prod.price}
                        </Typography>
                    </div>
                    <Typography variant="h7" color="textSecondary">{prod.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Card">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>}
        </>
    )
}
