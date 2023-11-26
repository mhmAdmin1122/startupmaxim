import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/img/logo.png";
import { FaUser, FaTools, FaStopwatch, FaBook, FaBookOpen  } from "react-icons/fa";

const Navbar = () => {
  const [isChangeIcon, setIsChangeIcon] = useState(false);

  const handleClick = (event: any) => {
    setIsChangeIcon((current) => !current);
  };
  return (
    <nav>
      {/* logoBox */}
      <div className="logoBox w-[15%]">
        <Link href={"/"} title="Home">
          <Image src={logo} alt="logo" className="w-full h-full" />
          <div className="name">
            <h1>StartupMAXIM</h1>
          </div>
        </Link>
      </div>

      {/* Tabs */}
      <div className="tabs w-[50%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Packages</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Client Edition</Link>
      </div>

      {/* Auth-Btns */}
      <div className="auth-btns w-[35%] justify-end">
        <Link href={"/"} className="auth-btn auth-consultation">
          <i>
            <FaStopwatch />
          </i>
          <h2>Book Consultaion</h2>
        </Link>
        <Link href={"/"} className="auth-btn auth-signIn">
          <i>
            <FaUser />
          </i>
          <h2>Sign In</h2>
        </Link>
        <Link href={"/"} className="auth-btn auth-Tools">
          <i>
            <FaTools />
          </i>
          <h2>Tools</h2>
        </Link>
      </div>

      <div className="mobile-menu">
        {isChangeIcon ? (
          <i>
            <FaBookOpen onClick={handleClick} />
          </i>
        ) : (
          <i>
            <FaBook onClick={handleClick} />
          </i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
