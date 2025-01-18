import {
  PencilRuler,
  House,
  MessageCircleQuestion,
  FolderHeart,
  Info,
} from "lucide-react";
import Image from "next/image";
import navbarLogo from "../../public/assets/Navbar/01_Navbar_Logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="navbar1">
        <div className="logo">
          <Image src={navbarLogo} alt="Logo" className="logoImg" />
        </div>
        <div className="ctnbtn">
          <button className="btn">Get in Touch</button>
        </div>
      </div>

      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <a href="#home">
              <House className="navIcons" />
              Home
            </a>
          </li>
          <li>
            <a href="#work">
              <FolderHeart className="navIcons" />
              Work
            </a>
          </li>
          <li>
            <a href="#service">
              <PencilRuler className="navIcons" />
              Services
            </a>
          </li>
          <li>
            <a href="#faq">
              <MessageCircleQuestion className="navIcons" />
              FAQs
            </a>
          </li>
          <li>
            <a href="#artist">
              <FolderHeart className="navIcons" />
              Artist
            </a>
          </li>
          <li>
            <a href="#footer">
              <Info className="navIcons" />
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
