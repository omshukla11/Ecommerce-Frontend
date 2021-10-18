import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Switch, Button } from "@mui/material";
import logo from "../../media/logo.png";
import useStyles from './styles'
import { ShoppingCart } from "@material-ui/icons";
import { useTheme, useThemeUpdate } from "../../Hooks/ThemeContext";
import CustomizedSwitches from "./DarkSwitch";

export default function Navbar() {
  const changeTheme = useThemeUpdate()
  const Theme = useTheme()
  const classes = useStyles();
  return (
    <>
      {Theme ? 
      
      <AppBar position="fixed" className={classes.appBar} style={{background: '#000000', color:'#FFFFFF'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="Ecommerce" height="25px" className={classes.image} />
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <CustomizedSwitches />
              <Badge badgeContent={6} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar> 
      
      : 
      
      <AppBar position="fixed" className={classes.appBar} style={{background: '#FFFFFF', color:"#000000"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="Ecommerce" height="25px" className={classes.image}/>
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <CustomizedSwitches />
              <Badge badgeContent={6} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>}

    </>
  )
}