import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='header'>
      <h1 className='h1'>
        I am <span>Alireza Zandi</span>
      </h1>
      <h2 className='h2'>Front-end developer</h2>
      <div className='more'>
        <Link to='/skills' className='link'>
          more about me
        </Link>
        <i className='material-icons icon'>keyboard_arrow_down</i>
      </div>
    </div>
  );
};

export default Header;
