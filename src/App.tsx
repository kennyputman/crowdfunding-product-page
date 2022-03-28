import React, { useState } from "react";
import About from "./components/About";
import BackingInfo from "./components/BackingInfo";
import BackProjectModal from "./modal/BackProjectModal";
import Nav from "./components/Nav";
import ProductDescription from "./components/ProductDescription";
import data from "./data/data";
import useModal from "./modal/useModal";

function App() {
  const [backed, setBacked] = useState(data.backed);
  const [backers, setBackers] = useState(data.backers);
  const [pledgeAmount, setPledgeAmount] = useState(0);
  const { showModal, toggle } = useModal();

  return (
    <div className="App font-commissioner flex flex-col items-center bg-background-white min-h-screen relative">
      <div className="bg-[url('./assets/images/image-hero-desktop.jpg')] bg-no-repeat bg-cover bg-center min-h-hero w-full absolute top-0 z-0"></div>
      <BackProjectModal
        showModal={showModal}
        pledgeAmount={pledgeAmount}
        title={data.title}
        pledges={data.pledges}
        toggle={toggle}
      ></BackProjectModal>
      <Nav></Nav>
      <div className="flex flex-col max-w-3xl gap-y-6 z-10 mt-56">
        <ProductDescription
          title={data.title}
          pitch={data.pitch}
          toggle={toggle}
        ></ProductDescription>
        <BackingInfo
          backed={backed}
          backers={backers}
          daysLeft={data.daysLeft}
          goal={data.goal}
        ></BackingInfo>
        <About
          about={data.about}
          pledges={data.pledges}
          toggle={toggle}
        ></About>
      </div>
    </div>
  );
}

export default App;
