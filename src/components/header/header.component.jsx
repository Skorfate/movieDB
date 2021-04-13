
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss';
import { AppBar } from '@material-ui/core';

export class Header extends Component {
    render() {
        return (
            <div className='header'>
           <Link className='logo' to='/'>
                MovieDB
           </Link>
           <div className='options'>
               <Link className='option' to='/sobre'>
                Sobre
               </Link>               

           </div>
        </div>
        )
    }
}

export default Header
