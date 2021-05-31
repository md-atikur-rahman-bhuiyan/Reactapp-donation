import React from 'react';
import {Nav} from 'react-bootstrap';
import './NavBar.scss';

const NavBar = () => {

    const menuItems= [
        {
            menuName: 'Home',
            Link: '/',
        },
        {
            menuName: 'Services',
            Link: '/services',
        },
        {
            menuName: 'About',
            Link: '/about',
        },
        {
            menuName: 'Contact',
            Link: '/contact',
        },
        {
            menuName: 'Work',
            Link: '/work',
        },
    ]

    return(
        <Nav
        className="justify-content-end header__menu"
        activeKey="/"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {
                menuItems.map((items) => 
                <Nav.Item key={items.Link}>
                    <Nav.Link href={items.Link} eventKey={items.Link}>{items.menuName}</Nav.Link>
                </Nav.Item>
                )
            }
        </Nav>
        
    )
}

export default NavBar;