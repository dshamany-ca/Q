import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import * as NavItems from '../constants/NavBarItems';

export default function NavBar(props){
    if (props.navItems){
        return (
            <div className="navBar">
                {
                    props.navItems.map((item) => {
                        return (
                            <Link 
                                className="navItem"
                                to={NavItems.default[item].path}
                                key={NavItems.default[item].key}
                            >
                                {NavItems.default[item].title}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
