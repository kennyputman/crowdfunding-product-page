import React from "react";

const Nav = () => {
  return (
    <header className="bg-[url('./assets/images/image-hero-desktop.jpg')] bg-no-repeat bg-cover bg-center flex justify-between min-h-hero text-white w-full">
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
