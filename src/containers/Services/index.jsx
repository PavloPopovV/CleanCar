import React from "react";
import MainTitle from "../../ui/Title";
import ServiceList from "../../components/Services/ServiceList";

export default function Services({ title }) {
  return (
    <section>
      <MainTitle title={title} />
      <ul>
        <ServiceList/>
      </ul>
    </section>
  );
}
