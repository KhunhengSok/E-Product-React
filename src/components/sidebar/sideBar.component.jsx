import React from 'react';
import {stack as Menu} from 'react-burger-menu';

export default props => {

    let isMenuOpen = function(state) {
        return state.isOpen;
    };

    return (
        <Menu onStateChange={ isMenuOpen }  >
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/burgers">Burgers</a>
            <a className="menu-item" href="/pizzas">Pizzas</a>
            <a className="menu-item" href="/desserts">Desserts</a>
        </Menu>
    );
};