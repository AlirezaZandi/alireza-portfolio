import React from "react";
import "./header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='header'>
      <h1 className='h1'>I am Alireza Zandi</h1>
      <h2 className='h2'>Front-end developer</h2>
      <div className='more'>
        <a href='#' className='link'>
          more about me
        </a>
        <i className='material-icons icon'>keyboard_arrow_down</i>
      </div>
    </div>
  );
};

export default Header;
