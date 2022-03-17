import React from "react";

type BackingProps = {
  backed: number;
  backers: number;
  daysLeft: number;
  goal: number;
};

const BackingInfo = (props: BackingProps) => {
  const percentBacked = (props.backed / props.goal) * 100;

  return (
    <section className="flex flex-col max-w-3xlbg-white rounded-md p-12">
      <div className="flex flex-row justify-around text-center mb-9">
        <div className="border-r-2 flex-1">
          <h3>${props.backed}</h3>
          <p>of ${props.goal} backed</p>
        </div>
        <div className="border-r-2 flex-1">
          <h3>${props.backers}</h3>
          <p>total backers</p>
        </div>
        <div className="flex-1">
          <h3>${props.daysLeft}</h3>
          <p>days left</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
          style={{ width: `${percentBacked}%` }}
        ></div>
      </div>
    </section>
  );
};

export default BackingInfo;
