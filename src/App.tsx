import React, { useState } from "react";
import About from "./components/About";
import BackingInfo from "./components/BackingInfo";
import Nav from "./components/Nav";
import ProductDescription from "./components/ProductDescription";
import data from "./data/data";

function App() {
  const [backed, setBacked] = useState(data.backed);
  const [backers, setBackers] = useState(data.backers);
  const [pledgeAmount, setPledgeAmount] = useState(0);

  const backedHandler = () => {
    setBacked(backed + 120);
  };

  return (
    <div className="App font-commissioner flex flex-col items-center relative bg-slate-50 h-screen">
      <Nav></Nav>
      <div className="flex flex-col max-w-3xl top-80 absolute gap-y-6">
        <ProductDescription
          title={data.title}
          pitch={data.pitch}
        ></ProductDescription>
        <BackingInfo
          backed={backed}
          backers={backers}
          daysLeft={data.daysLeft}
          goal={data.goal}
        ></BackingInfo>
        {/* <About about={data.about} pledges={data.pledges}></About> */}
      </div>
    </div>
  );
}

export default App;
