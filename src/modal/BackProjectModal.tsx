import React from "react";
import ReactDOM from "react-dom";
import { Pledge } from "../types/PropTypes";
import { ModalPledgeCard } from "./ModalPledgeCard";

type ProjectModalProps = {
  showModal: boolean;
  pledgeAmount: number;
  title: string;
  pledges: Pledge[];
  toggle: () => void;
};

const BackProjectModal = (props: ProjectModalProps) =>
  props.showModal
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="z-30 fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-light-overlay flex flex-col justify-center items-center"
            id="modal-overlay"
          >
            <div className="bg-white rounded-lg max-w-3xl p-6">
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl mb-4">Back this project</h1>
                <button onClick={props.toggle} className="h-4 w-4">
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                      fill="#000"
                      fill-rule="evenodd"
                      opacity=".4"
                    />
                  </svg>
                </button>
              </div>

              <p className="mb-8 text-dark-gray">
                Want to support us in brining {props.title} out in this world?
              </p>

              {props.pledges.map((pledge) => (
                <ModalPledgeCard pledge={pledge}></ModalPledgeCard>
              ))}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default BackProjectModal;
