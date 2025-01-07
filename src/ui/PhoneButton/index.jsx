import React from "react";
import { PhoneBtn } from "./styles";

export default function PhoneButton({ data }) {
  const { tel, mask } = data;
  return <PhoneBtn href={`tel:+${tel}`}>{mask}</PhoneBtn>;
}
