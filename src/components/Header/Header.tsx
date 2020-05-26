import React from 'react';
import s from './Header.module.css'
import logo from '../../image/header_logo.png'

const Header = () => {
    return <div className={s.header}>
        <div className={s.boxLogo}><img src={logo}/></div>
    </div>
}


export default Header;