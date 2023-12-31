import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Felipe Amorim" />
      <p className="title">Desenvolvedor/Programador</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://felipelimaamorim.github.io/_curriculo/" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;