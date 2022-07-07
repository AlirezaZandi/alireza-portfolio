import React from "react";
import "./social.scss";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

type Props = {};

const Social = (props: Props) => {
  return (
    <div className='social'>
      <a href='#'>
        <img src={instagram} alt='instagram account link' />{" "}
      </a>
      <a href='#'>
        <img src={twitter} alt='twitter account link' />{" "}
      </a>
      <a href='#'>
        <img src={github} alt='github account link' />
      </a>
      <a href='#'>
        <img src={linkedin} alt='linkedin account link' />{" "}
      </a>
    </div>
  );
};

export default Social;
