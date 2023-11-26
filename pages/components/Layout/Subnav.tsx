import Link from "next/link";
import React from "react";
import Marque from "../Other/Marque";
import { FaEnvelopeOpenText, FaBlenderPhone } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const Subnav = () => {
  return (
    <div className="subnav-box">
      <div className="conatct-us-info">
        <Link href={"mailto:sales@startupmaxim.com"} target="_blank" title="Send Mail Mesage Now">
          <i>
            <FaEnvelopeOpenText />
          </i>
          <h3>sales@startupmaxim.com</h3>
        </Link>

        <Link href={"/"} target="_blank" title="Contact Us">
          <i>
            <MdContacts />
          </i>
          <h3>Contact Us</h3>
        </Link>

        <Link href={"tel:+923036424939"} target="_blank" title="Call To Us">
          <i>
            <FaBlenderPhone />
          </i>
          <h3>+923036424939</h3>
        </Link>
      </div>
      <div className="marquee flex gap-4">
        <Marque
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum soluta itaque voluptates sunt voluptatem, sed voluptas veritatis cumque, vero aut aperiam ipsa esse quod maxime delectus deleniti. Exercitationem, earum sequi?"
          }
        />
      </div>
    </div>
  );
};

export default Subnav;
