import React from "react";
import { TITLES } from "../../data/titles";
import MainTitle from "../../ui/Title";
import ContactsInfo from "../../components/Contacts/ContactsInfo";
import ContactsForm from "../../components/Contacts/ContactsForm";
import map from "../../assets/img/map.webp";
import { ContactsWrapper, ContactsBoxInfo, ContactsMapImg, ContactsFormWrapper } from "./styles";

export default function Contacts() {
  return (
    <section id="contacts">
      <MainTitle title={TITLES.CONTACTS} />

      <ContactsWrapper>
        <a href="https://maps.app.goo.gl/JG3ouKSenV3Hsdi67" target="blank">
          <ContactsMapImg src={map} alt="photo location" />
        </a>

        <ContactsBoxInfo>
          <ContactsInfo />
          <ContactsFormWrapper>
            <p>
              Order a range of services order a range of services range.
            </p>
            <ContactsForm />
          </ContactsFormWrapper>
        </ContactsBoxInfo>
      </ContactsWrapper>
    </section>
  );
}
