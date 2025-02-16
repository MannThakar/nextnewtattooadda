import React from "react";
import {
  PencilRuler,
  House,
  MessageCircleQuestion,
  FolderHeart,
  Info,
} from "lucide-react";
import Link from "next/link";

const NavbarSecond = () => {
  return (
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
  );
};

export default NavbarSecond;
