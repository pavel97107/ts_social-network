import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return <div className={s.NavBar}>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/Profile'} activeClassName={s.activeLink}><span
                className={s.text_link}>Profile</span></NavLink>
        </div>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/Users'} activeClassName={s.activeLink}><span
                className={s.text_link}>Users</span></NavLink>
        </div>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/Message'} activeClassName={s.activeLink}><span
                className={s.text_link}>Message</span></NavLink>
        </div>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/News'} activeClassName={s.activeLink}><span
                className={s.text_link}>News</span></NavLink>
        </div>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/Music'} activeClassName={s.activeLink}><span
                className={s.text_link}>Music</span></NavLink>
        </div>
        <div className={s.boxNavLink}>
            <NavLink className={s.nav_link} to={'/Settings'} activeClassName={s.activeLink}><span
                className={s.text_link}>Settings</span></NavLink>
        </div>
    </div>
}

export default NavBar;