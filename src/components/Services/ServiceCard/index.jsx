import React from "react";

import {
  ServiceCardWrapper,
  ServiceCardImg,
  ServiceCardModal,
  ServiceCardText,
  ServiceCardContent,
  ServiceCardTitle,
  ServiceCardInfo,
  ServiceCardBtn,
} from "./styles";

export default function ServiceCard({ data, active, onClick }) {
  const { title, text, img } = data;

  const handleScrollTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      <ServiceCardWrapper $isActive={active}>
        <ServiceCardTitle>{title}</ServiceCardTitle>
        <ServiceCardImg $isActive={active}>
          <img src={img} alt="service photo" />
        </ServiceCardImg>
        <ServiceCardContent>
          <ServiceCardInfo $isActive={active}>
            <div>
              <ServiceCardText $isActive={active}>{text}</ServiceCardText>
            </div>

            <ServiceCardModal
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contacts");
              }}
              aria-label="Contact Us"
              $isActive={active}
            >
              Contact Us
            </ServiceCardModal>
          </ServiceCardInfo>

          <ServiceCardBtn
            aria-label="Open description"
            type="button"
            onClick={onClick}
            $isActive={active}
          />
        </ServiceCardContent>
      </ServiceCardWrapper>
    </li>
  );
}
