import React from "react";
import Header from "../../components/Header";
import Social from "../../components/Social";

import "./home.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className='home-page'>
      <div className='home-header'>
        <Header />
      </div>
      <div className='home-social'>
        <Social />
      </div>
    </div>
  );
};

export default Home;
