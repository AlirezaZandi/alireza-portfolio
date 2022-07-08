import React from "react";
import Social from "../../components/Social";
import ContactMeComponent from "../../components/ContactMe";

import "./contactMe.scss";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className='contact-me-page'>
      <div className='contact-info'>
        <ContactMeComponent />
      </div>
      <div className='contact-social'>
        <Social />
      </div>
    </div>
  );
};

export default ContactMe;
