import React from "react";
import { Pledge } from "../types/PropTypes";
import { PledgeCard } from "./PledgeCard";

type AboutProps = {
  about: string[];
  pledges: Pledge[];
  toggle: () => void;
};

const About = (props: AboutProps) => {
  return (
    <section className="max-w-3xl bg-white rounded-md p-12 mb-32">
      <h2 className="pb-4">About this project</h2>
      {props.about.map((item, index) => {
        return (
          <p className="pb-4" key={index}>
            {item}
          </p>
        );
      })}

      {props.pledges.map((pledge) => (
        <PledgeCard pledge={pledge} toggle={props.toggle}></PledgeCard>
      ))}
    </section>
  );
};

export default About;
