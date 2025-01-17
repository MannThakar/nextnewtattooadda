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
            <House className="navIcons" />
            Home
          </li>
          <li>
            <FolderHeart className="navIcons" />
            Work
          </li>
          <li>
            <PencilRuler className="navIcons" />
            Services
          </li>
          <li>
            <MessageCircleQuestion className="navIcons" />
            FAQs
          </li>
          <li>
            <FolderHeart className="navIcons" />
            Artist
          </li>
          <li>
            <Info className="navIcons" />
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
