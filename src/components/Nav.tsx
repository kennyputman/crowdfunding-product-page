import React from "react";

const Nav = () => {
  return (
    <header
      className="flex justify-between  text-white w-full
    z-10"
    >
      <div className="pt-12 pl-40">
        <h1 className="text-xl font-medium">crowdfund</h1>
      </div>
      <div className="flex flex-row gap-2 pt-12 pr-40">
        <div>About</div>
        <div>Discover</div>
        <div>Get Started</div>
      </div>
    </header>
  );
};

export default Nav;
