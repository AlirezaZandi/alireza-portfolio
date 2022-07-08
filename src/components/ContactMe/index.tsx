import React from "react";
import "./contactMe.scss";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className='contact-me'>
      <h1 className='h1'>Contact me</h1>
      <div className='call-info'>
        <h2 className='h2'>Name: Alireza Zandi</h2>
        <h2 className='h2'>
          Email:{" "}
          <a href='mailto:Alirezazandi7800@gmail.com'>
            Alirezazandi7800@gmail.com
          </a>
        </h2>
        <h2 className='h2'>Phone: 09392239089</h2>
      </div>
    </div>
  );
};

export default ContactMe;
