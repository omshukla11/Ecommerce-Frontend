import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import useStyles from "./styles"
import { useTheme } from "../../Hooks/useThemeContext";


export default function Profile({ token }) {

  const classes = useStyles();
  let themestyle = {};

  if (useTheme()) {
    themestyle = { background: '#000000', color: '#FFFFFF' }
  }
  else {
    themestyle = { color: '#000000', background: '#FFFFFF' }
  }

  const [userinfo, setUserInfo] = useState({})

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/users/info/${token}/`, { method: 'GET', redirect: 'follow' })
      .then(res => {
        setUserInfo(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })

    // fetch(`http://127.0.0.1:8000/users/info/${token}`, {
    //   method: 'GET',
    //   redirect: 'follow'
    // })
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }, [token])

  return (
    <center style={{ margin: '100px' }}>
      <Grid container justify="center" spacing={4}>
        <Grid item key={userinfo.id} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.root} style={themestyle}>
          <CardMedia className={classes.media} image={userinfo.profile_pic} title={userinfo.first_name} />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography variant='h6' gutterBottom style={themestyle}>
                  {userinfo.first_name} {userinfo.last_name}
                </Typography>
                <Typography variant='h7'>
                  {userinfo.email}
                </Typography>
              </div>
              <Typography variant="h7" style={themestyle}>{}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </center>
  )
}