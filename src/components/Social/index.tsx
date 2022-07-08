import React from "react";
import "./social.scss";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

type Props = {};

const socials = [
  {
    img: instagram,
    link: "https://www.instagram.com/calledalish/",
  },
  {
    img: github,
    link: "https://github.com/AlirezaZandi",
  },
  {
    img: twitter,
    link: "https://twitter.com/CallMeAlireza_",
  },
  {
    img: linkedin,
    link: "https://www.linkedin.com/in/alireza-zandi-717435222",
  },
];

const Social = (props: Props) => {
  return (
    <div className='social'>
      {socials.map((social, index) => {
        return (
          <div className='item' key={index}>
            <a href={social.link} target='_blank' rel='noreferrer'>
              <img src={social.img} alt='instagram account link' />{" "}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
