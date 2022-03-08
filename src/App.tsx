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
    <div className="App">
      <header className="">
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
      </header>
      <section>
        <About about={data.about} pledges={data.pledges}></About>
      </section>
    </div>
  );
}

export default App;
