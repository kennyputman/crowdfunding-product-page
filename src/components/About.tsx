import React from "react";
import { PledgeCard } from "./PledgeCard";

type DataProps = {
  about: string[];
  pledges: {
    id: number;
    name: string;
    minPledgeAmount: number;
    description: string;
    left: number;
  }[];
};

const About = (props: DataProps) => {
  return (
    <div>
      <h2>About this project</h2>
      {props.about.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}

      {props.pledges.map((pledge) => (
        <PledgeCard
          key={pledge.id}
          name={pledge.name}
          minPledgeAmount={pledge.minPledgeAmount}
          description={pledge.description}
          left={pledge.left}
        ></PledgeCard>
      ))}
    </div>
  );
};

export default About;
