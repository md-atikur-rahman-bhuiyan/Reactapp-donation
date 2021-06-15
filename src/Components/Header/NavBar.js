import React from "react";
import { Nav } from "react-bootstrap";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItems = [
    {
      menuName: "Home",
      Link: "/",
    },
    {
      menuName: "Services",
      Link: "/services",
    },
    {
      menuName: "About",
      Link: "/about",
    },
    {
      menuName: "Contact",
      Link: "/contact",
    },
    {
      menuName: "Work",
      Link: "/work",
    },
  ];

  return (
    <Nav
      className="justify-content-end header__menu"
      activeKey="/"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      {menuItems.map((items) => (
        <Nav.Item key={items.Link}>
          <NavLink exact to={items.Link} activeClassName={`active`}>
            {items.menuName}
          </NavLink>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavBar;
