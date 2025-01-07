import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constantes/routes";
import logo from "../../assets/img/icons/logo.svg";
import { LogoImg } from "./styles";

export default function Logo() {
  return (
    <>
      <Link to={ROUTES.HOME}>
        <LogoImg src={logo} alt="company logo" />
      </Link>
    </>
  );
}
