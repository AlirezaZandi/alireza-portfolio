import React from "react";
import "./navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='nav'>
      <ul className='list'>
        <li className='item'>
          <a href='#'>Home</a>
        </li>
        <li className='item active'>
          <a href='#'>Skills</a>
        </li>
        <li className='item'>
          <a href='#'>Projects</a>
        </li>
        <li className='item'>
          <a href='#'>Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
