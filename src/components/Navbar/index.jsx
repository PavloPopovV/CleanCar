import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarLink } from "./styles";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavbarLink>
          <NavLink to="/#contacts">Contacts</NavLink>
        </NavbarLink>
        <NavbarLink>
          <NavLink to="/#models">Models</NavLink>
        </NavbarLink>
        <NavbarLink>
          <NavLink to="/#about">About Us</NavLink>
        </NavbarLink>
      </ul>
    </nav>
  );
}
