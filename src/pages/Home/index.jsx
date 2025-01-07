import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Services,
  Advantages,
  Price,
  Models,
  Reviews,
  Contacts,
  About,
  Hero,
} from "../../containers";
import { TITLES } from "../../data/titles";

export default function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <Models title={TITLES.MODELS} />
      <Price title={TITLES.PRICE} />
      <About title={TITLES.ABOUT} />
      <Services title={TITLES.SERVICES} />
      <Advantages title={TITLES.ADVANTAGES} />
       <Contacts title={TITLES.CONTACTS} />
      <Reviews title={TITLES.REVIEWS} />
    </>
  );
}
