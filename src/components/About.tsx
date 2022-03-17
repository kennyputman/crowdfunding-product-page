import React from "react";
import { Pledge } from "../types/PropTypes";
import { PledgeCard } from "./PledgeCard";

type AboutProps = {
  about: string[];
  pledges: Pledge[];
};

const About = (props: AboutProps) => {
  return (
    <section className="flex flex-row max-w-3xl top-300 absolute">
      <h2>About this project</h2>
      {props.about.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}

      {props.pledges.map((pledge) => (
        <PledgeCard pledge={pledge}></PledgeCard>
      ))}
    </section>
  );
};

export default About;
