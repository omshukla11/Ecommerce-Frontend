import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography, Button } from "@mui/material";
import logo from "../../media/logo.png";
import useStyles from './styles'
import { ShoppingCart } from "@material-ui/icons";
import { useTheme } from "../../Hooks/useThemeContext";
import CustomizedSwitches from "./DarkSwitch";
import { Link, useLocation } from 'react-router-dom'
import useToken from '../../Hooks/useToken';
import { useHistory } from "react-router";

export default function Navbar() {

  const hist = useHistory()

  const { token, setToken } = useToken();

  function logout() {
    localStorage.clear()
    hist.push('/login/')
  }

  const classes = useStyles();

  let themestyle = {};
  const i = useLocation().pathname

  if (useTheme()) {
    themestyle = { background: '#000000', color: '#FFFFFF', textdecoration: 'none' }
  }
  else {
    themestyle = { color: '#000000', background: '#FFFFFF' }
  }


  return (
    <>
      {!token ?

        <AppBar position="fixed" className={classes.appBar} style={themestyle}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="Ecommerce" height="25px" className={classes.image} />
              E-Commerce
            </Typography>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>

        :

        <AppBar position="fixed" className={classes.appBar} style={themestyle}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="Ecommerce" height="25px" className={classes.image} />
              E-Commerce
            </Typography>
            {i === '/categories/' ? <><Button component={Link} to='/' variant="text" style={themestyle}>Home</Button> <Button component={Link} to='/profile/' variant="text" style={themestyle}>Your Profile</Button></>: ''}
            {i === '/' ? <><Button component={Link} to='/categories/' variant="text" style={themestyle}>Categories</Button> <Button component={Link} to='/profile/' variant="text" style={themestyle}>Your Profile</Button></>: ''}
            {i === '/profile/' ? <><Button component={Link} to='/' variant="text" style={themestyle}>Home</Button> <Button component={Link} to='/categories/' variant="text" style={themestyle}>Categories</Button> </>: ''}
            <div className={classes.grow} />
            <Button onClick={logout} component={Link} to='/login/' variant="text" style={themestyle}>Log Out</Button>
            <div className={classes.button}>
              <IconButton aria-label="Show Cart Items" color="inherit">
                <CustomizedSwitches />
                <Badge badgeContent={6} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>}</>
  )
}