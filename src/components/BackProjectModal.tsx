import React from "react";

type ProjectModalProps = {
  pledgeAmount: number;
};

export const BackProjectModal = (props: ProjectModalProps) => {
  return (
    <div>
      <p>pledge amount {props.pledgeAmount}</p>
      <h2>Bamboo Stand</h2>
      <span>Pledge $25 or more</span>
      <p>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </p>{" "}
      <span>101 left</span>
    </div>
  );
};
