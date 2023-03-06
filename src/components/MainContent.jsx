import React from 'react';
import About from "./AboutConainer";
import Technologies from "./TechnologiesContainer";
import Projects from "./ProjectsContainer";

import '../styles/components/maincontent.sass'

const MainComponent = () => {

  return (
    <main id='main-content'>
      <About />
      <Technologies/>
      <Projects/>

    </main>
  )
}

export default MainComponent