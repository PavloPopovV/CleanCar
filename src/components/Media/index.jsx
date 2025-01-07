import React from "react";
import { media } from "../../data/contacts";
import { MediaWrapper, MediaBtn } from "./styles";

export default function Media() {
  return (
    <MediaWrapper>
      {media.map((item, index) => (
        <li key={new Date() + index}>
          <MediaBtn className={item.clasName} href={item.link} aria-label={`Посилання на соц. мережі`}/>
        </li>
      ))}
    </MediaWrapper>
  );
}
