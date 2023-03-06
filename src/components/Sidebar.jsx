import React from 'react';
import Avatar from "../img/eu.jpg";
import Social from './SocialNetworks';
import  InformationContainer from './informationConatainer'

import "../styles/components/sidebar.sass";

const Sidebar = () => {

  return (
    <aside id="sidebar">
     <img src={Avatar} alt="Miranha"/>
      <p className="title">Desenvolvedor</p>
      <Social />
      <InformationContainer/>
      <a href="" className='btn'>Download currículo</a>
    </aside>
  )
}

export default Sidebar