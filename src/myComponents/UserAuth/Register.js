import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import useStyles from './styles';
import { Link } from "react-router-dom";
import useToken from "../../Hooks/useToken";


export default function Register() {

    const { token, setToken } = useToken();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')

    const classes = useStyles()

    async function signUp() {

        let item = { email, password, first_name, last_name }

        let result = await fetch('http://127.0.0.1:8000/users/', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        })
        result = await result.json()
        
        setToken({'token': result.token})
    }
    return (
        <center>
            <Box
                className={classes.form}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div />
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <div />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        type="text"
                        value={last_name}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <div />
                    <TextField
                        id="outlined-required"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button variant="contained" onClick={signUp} component={Link} to='/'>Sign-Up</Button>
                <div/> <br/>
                <Typography> Already have an account? </Typography>
                {!token ? <Button variant="contained" component={Link} to='/login/'>Log In</Button>:<Button variant="contained" component={Link} to='/login/'>Log In</Button>}
            </Box>
        </center>
    )
}