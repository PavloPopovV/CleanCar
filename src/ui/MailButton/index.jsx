import React from "react";
import { MailBtn } from "./styles";

export default function MailButton({ data }) {
  const { mail } = data;
  return <MailBtn href={`mailto:+${mail}`}>{mail}</MailBtn>;
}
