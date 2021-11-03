import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import useStyles from './styles';
import { Link, useHistory } from "react-router-dom";
import useToken from "../../Hooks/useToken";

export default function Login() {
    const {token, setToken } = useToken()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles()

    async function login() {

        let item = { username, password }

        let result = await fetch('http://127.0.0.1:8000/users/login-token/', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        })
        result = await result.json()
        
        setToken({'token': result.token})

        history.push('/')
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <Button variant="contained" onClick={login} component={Link} to='/'>Login</Button>
                <div /> <br/>
                <Typography> New here? </Typography>
                <Button variant="contained" component={Link} to='/register/'>Create your Account</Button>
            </Box>
        </center>
    )
}