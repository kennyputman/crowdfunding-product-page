import React from "react";
import { Pledge } from "../types/PropTypes";
import { ModalPledgeCard } from "./ModalPledgeCard";

type ProjectModalProps = {
  pledgeAmount: number;
  title: string;
  pledges: Pledge[];
};

export const BackProjectModal = (props: ProjectModalProps) => {
  return (
    <div className="z-30 fixed top-0 left-0  w-full h-full overflow-x-hidden overflow-y-auto bg-light-overlay flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg max-w-3xl p-6">
        <h1>Back this project</h1>
        <p>Want to support us in brining {props.title} out in this world?</p>

        {props.pledges.map((pledge) => (
          <ModalPledgeCard pledge={pledge}></ModalPledgeCard>
        ))}
      </div>
    </div>
  );
};
