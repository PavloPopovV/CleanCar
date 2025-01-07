import React from "react";
import Logo from "../../ui/Logo";
import Media from "../../components/Media";
import { contact, location } from "../../data/contacts";
import map from "../../assets/img/map.webp";
import LocationButton from "../../ui/LocationButton";
import PhoneButton from "../../ui/PhoneButton";
import MailButton from "../../ui/MailButton";
import {
  FooterSection,
  FooterWrapper,
  FooterMap,
  FooterLogoWrapper,
  FooterLogoTop,
  FooterMediaWrapper
} from "./styles";

export default function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterLogoWrapper>
          <FooterLogoTop>
            <Logo />
            <br/>
            <Media />
          </FooterLogoTop>
          <p>Copyright © 2024 – Clean Car. All Right Reserved.</p>
        </FooterLogoWrapper>
        <FooterMediaWrapper>
          <LocationButton data={location} />
          <PhoneButton data={contact} />
          <MailButton data={contact} />
        </FooterMediaWrapper>
        <FooterMap>
          <a
            href="https://www.google.com/maps/place/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8325722,23.8474292,11z/data=!3m1!4b1!4m6!3m5!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24?entry=ttu"
            target="blank"
          >
            <img src={map} alt="location area" />
          </a>
        </FooterMap>
      </FooterWrapper>
    </FooterSection>
  );
}
