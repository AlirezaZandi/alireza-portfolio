import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/skills",
    title: "Skills",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/contact",
    title: "Contact me",
  },
];

const Navbar = (props: Props) => {
  const { pathname } = useLocation();

  const [showDrawer, setShowDrawer] = useState(true);

  return (
    <nav className='nav'>
      <ul className='list'>
        {links.map((link) => {
          const itemClass = `item ${pathname === link.path && "active"}`;

          return (
            <li className={itemClass} key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <button className='drawer-btn' onClick={() => setShowDrawer(true)}>
        <i className='material-icons icon'>menu</i>
      </button>
      <ul
        className={`list drawer-list ${showDrawer ? "show" : ""}`}
        id='drawer-list'>
        <div className='close'>
          <button onClick={() => setShowDrawer(false)}>
            <i className='material-icons icon'>close</i>
          </button>
        </div>
        {links.map((link) => {
          const itemClass = `item ${pathname === link.path && "active"}`;

          return (
            <li className={itemClass} key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
