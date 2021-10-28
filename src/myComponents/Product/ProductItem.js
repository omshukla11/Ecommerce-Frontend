import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from "./styles"
import { useTheme } from '../../Hooks/useThemeContext'

export default function ProductItem({ prod }) {
    const classes = useStyles();
    function checkstock() {
        if (prod.instock > 0) {
            return true
        } else {
            return false
        }
    }

    let themestyle = {};

    if (useTheme()) {
        themestyle = { background: '#000000', color: '#FFFFFF' }
    }
    else {
        themestyle = { color: '#000000', background: '#FFFFFF' }
    }

    return (
        <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root} style={themestyle}>
                <CardMedia className={classes.media} image={prod.product_img} title={prod.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom style={themestyle}>
                            {prod.name}
                        </Typography>
                        <Typography variant='h7'>
                            ₹{prod.price}
                        </Typography>
                    </div>
                    <Typography variant="h7" style={themestyle}>{prod.description}</Typography>
                </CardContent>
                {checkstock() ? <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart style={themestyle} />
                    </IconButton>
                </CardActions>
                    :
                    <Typography variant='h7' style={themestyle}>
                        Not in stock
                    </Typography>}
            </Card>
        </Grid>
    )
}
