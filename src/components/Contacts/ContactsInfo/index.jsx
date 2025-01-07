import React from "react";
import Media from "../../Media";
import PhoneButton from "../../../ui/PhoneButton";
import { contact, location } from "../../../data/contacts";
import LocationButton from "../../../ui/LocationButton";
import MailButton from "../../../ui/MailButton";
import { ContactsDetails, ContactsButtons } from "./styles";

export default function ContactsInfo() {
  return (
    <ContactsDetails>
      <ContactsButtons>
        <LocationButton data={location} />
        <MailButton data={contact}/>
        <PhoneButton data={contact} />
      </ContactsButtons>
      <p>
        Here you can view our work in detail
        and be the first to know about our promotions
      </p>
      <Media />
    </ContactsDetails>
  );
}
