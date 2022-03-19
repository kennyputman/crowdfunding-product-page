import React from "react";
import { Pledge } from "../types/PropTypes";

type PledgeCardProps = {
  pledge: Pledge;
};

export const ModalPledgeCard = (props: PledgeCardProps) => {
  console.log(props);
  return (
    <section className="border-solid border border-light-gray px-8 py-9 rounded-md mb-6 ">
      <div className="flex flex-row justify-between pb-6">
        <div>
          <h3 className="font-bold">{props.pledge.name}</h3>
          <span className="text-moderate-cyan font-medium">
            spanledge ${props.pledge.minPledgeAmount} or more
          </span>
        </div>
        <p className="font-bold text-3xl">
          {props.pledge.left}
          <span className="font-normal text-sm pl-2 text-dark-gray">left</span>
        </p>
      </div>
      <p className="pb-6 text-dark-gray">{props.pledge.description}</p>
      <div className="flex flex-row justify-between">
        {/* <button className="bg-moderate-cyan hover:bg-dark-cyan btn-base">
          Select Reward
        </button> */}
      </div>
    </section>
  );
};
