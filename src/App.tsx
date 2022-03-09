import React, { useState } from "react";
import About from "./components/About";
import { BackProjectModal } from "./components/BackProjectModal";
import data from "./data/data";

function App() {
  const [backed, setBacked] = useState(data.backed);
  const [backers, setBackers] = useState(data.backers);
  const [pledgeAmount, setPledgeAmount] = useState(0);

  const backedHandler = () => {
    setBacked(backed + 120);
  };

  return (
    <div className="App font-commissioner">
      <header className="bg-[url('./assets/images/image-hero-desktop.jpg')] flex justify-between min-h-hero text-white">
        <div className="pt-12 pl-40">
          <h1 className="text-xl font-medium">crowdfund</h1>
        </div>
        <div className="flex flex-row gap-2 pt-12 pr-40">
          <div>About</div>
          <div>Discover</div>
          <div>Get Started</div>
        </div>
      </header>
      <section>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful &amp; handcrafted monitor stand to reduce neck and eye
          strain.
        </p>
        <button
          onClick={backedHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back this project
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Bookmark
        </button>
      </section>
      <section>
        <About about={data.about} pledges={data.pledges}></About>
      </section>
    </div>
  );
}

export default App;
