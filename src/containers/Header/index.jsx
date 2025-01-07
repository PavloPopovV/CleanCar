import React from "react";
import Logo from "../../ui/Logo";
import Navbar from "../../components/Navbar";
import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo/>
      <Navbar/>
    </HeaderWrapper>
  );
}
