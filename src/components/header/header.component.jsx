
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar:{
        backgroundColor:'black',
        marginBottom: '5px',
    }
  }));
  

const Header = () => {
    const classes = useStyles();
    
    return (

        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                
                <Typography variant="h4" className={classes.title}>
                    <Button  color="inherit" href="/">   
                        MovieDB
                    </Button> 
                </Typography>
                
                <Button  color="inherit" href="/sobre">Sobre</Button>
            </Toolbar>
            </AppBar>
    )
    
}

export default Header
