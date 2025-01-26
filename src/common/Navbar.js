import {
  PencilRuler,
  House,
  MessageCircleQuestion,
  FolderHeart,
  Info,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="navbar1">
        <div className="logo">
          <Image
            src="/Navbar/01_Navbar_Logo.svg"
            alt="Logo"
            className="logoImg"
            width={100}
            height={100}
          />
        </div>
        <div className="ctnbtn">
          <button className="btn">Get in Touch</button>
        </div>
      </div>

      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <Link href="/">
              <House className="navIcons" />
              Home
            </Link>
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
