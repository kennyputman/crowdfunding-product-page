import React from "react";
import { Pledge } from "../types/PropTypes";
import { ModalPledgeCard } from "./ModalPledgeCard";

type ProjectModalProps = {
  showModal: boolean;
  pledgeAmount: number;
  title: string;
  pledges: Pledge[];
};

export const BackProjectModal = (props: ProjectModalProps) => {
  const displayModal = props.showModal ? {} : {display: "none"}
  return (
    <div
      className="z-30 fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-light-overlay flex flex-col justify-center items-center"
      style={displayModal}
    >
      <div className="bg-white rounded-lg max-w-3xl p-6">
        <h1 className="font-bold text-2xl mb-4">Back this project</h1>
        <p className="mb-8 text-dark-gray">
          Want to support us in brining {props.title} out in this world?
        </p>

        {props.pledges.map((pledge) => (
          <ModalPledgeCard pledge={pledge}></ModalPledgeCard>
        ))}
      </div>
    </div>
  );
};
