import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="navbar1">
        <Link href="/">
          <div className="logo">
            <Image
              src="/Navbar/01_Navbar_Logo.svg"
              alt="Logo"
              className="logoImg"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <div className="ctnbtn">
          <Link href={"https://wa.link/2c1gtv"}>
            <button className="btn">Get in Touch</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
