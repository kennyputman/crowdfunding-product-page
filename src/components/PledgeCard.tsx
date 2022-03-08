import React from "react";

type pledgePropType = {
  name: string;
  minPledgeAmount: number;
  description: string;
  left: number;
};

export const PledgeCard = (props: pledgePropType) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Pledge ${props.minPledgeAmount}</p>
      <p>{props.description}</p>
      <p>
        {props.left}
        <span>left</span>
      </p>
      <button>Select Reward</button>
    </div>
  );
};
