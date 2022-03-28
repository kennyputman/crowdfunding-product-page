import React from "react";
import { Pledge } from "../types/PropTypes";

type PledgeCardProps = {
  pledge: Pledge;
  toggle: () => void;
};

export const PledgeCard = (props: PledgeCardProps) => {
  return (
    <section className="border-solid border border-light-gray px-8 py-9 rounded-md mb-6 ">
      <div className="flex flex-row justify-between pb-6">
        <h3 className="font-bold">{props.pledge.name}</h3>
        <p className="text-moderate-cyan font-medium">
          Pledge ${props.pledge.minPledgeAmount} or more
        </p>
      </div>
      <p className="pb-6 text-dark-gray">{props.pledge.description}</p>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-3xl">
          {props.pledge.left}
          <span className="font-normal text-sm pl-2 text-dark-gray">left</span>
        </p>
        <button
          className="bg-moderate-cyan hover:bg-dark-cyan btn-base"
          onClick={props.toggle}
        >
          Select Reward
        </button>
      </div>
    </section>
  );
};
