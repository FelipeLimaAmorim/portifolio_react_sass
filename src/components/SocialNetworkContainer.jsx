import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/felipe-amorim-8261b2270/" }, 
  { name: "github", icon: <FaGithub />, url: "https://github.com/FelipeLimaAmorim" },
  { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/your-profile" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
        
      ))}
    </section>
  );
};

export default SocialNetworkContainer;