import React, { useState } from "react";
import { Pledge } from "../types/PropTypes";

type PledgeCardProps = {
  pledge: Pledge;
};



export const ModalPledgeCard = (props: PledgeCardProps) => {
  const filled = props.pledge.left === 0 ? { opacity: 0.4 } : {};
  const active = true;

  return (
    <section
      className="border-solid border border-light-gray px-8 py-9 rounded-md mb-6 "
      style={filled}
    >
      <div className="flex">
        <div className="mr-6">
          <button className="w-6 h-6 border-solid border rounded-full flex justify-center items-center">
            {active ? <div className="w-3 h-3 bg-moderate-cyan rounded-full"></div> : <></>}
          </button>
        </div>
        <div>
          <div className="flex flex-row justify-between pb-6">
            <div className="flex gap-4">
              <h3 className="font-bold">{props.pledge.name}</h3>
              <p className="text-moderate-cyan font-medium">
                Pledge ${props.pledge.minPledgeAmount} or more
              </p>
            </div>
            <p className="font-bold text-3xl">
              {props.pledge.left}
              <span className="font-normal text-sm pl-2 text-dark-gray">left</span>
            </p>
          </div>
          <p className="pb-6 text-dark-gray">{props.pledge.description}</p>
        </div>

      </div>
      {active &&
        <div className="flex justify-between">
          <div>
            <p>Enter your pledge</p>
          </div>
          <div>
            <input type="text" name="" id="" placeholder={`$ ${props.pledge.minPledgeAmount}`}
              className="border border-light-gray py-2 px-4 rounded-full w-24 h-auto" />
            <button className=" bg-moderate-cyan text-white py-2 px-4 rounded-full">Continue</button>
          </div>
        </div>
      }


    </section>
  );
};
