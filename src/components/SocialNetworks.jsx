import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworks = () => {

  return <section id="social-networks">
    {socialNetworks.map((n) =>(
      <a href='#' className='social-btn' id={n.name} key={n.name}>{n.icon}</a>
      ))}
  
  </section>

}

export default SocialNetworks