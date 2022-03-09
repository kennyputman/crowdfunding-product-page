import React from "react";
import { Pledge } from "../types/PropTypes";

type PledgeCardProps = {
  pledge: Pledge;
};

export const PledgeCard = (props: PledgeCardProps) => {
  console.log(props);
  return (
    <div>
      <h3>{props.pledge.name}</h3>
      <p>Pledge ${props.pledge.minPledgeAmount}</p>
      <p>{props.pledge.description}</p>
      <p>
        {props.pledge.left}
        <span>left</span>
      </p>
      <button>Select Reward</button>
    </div>
  );
};
