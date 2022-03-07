import React, { useState } from "react";
import { BackProjectModal } from "./components/BackProjectModal";

function App() {
  const [backed, setBacked] = useState(89914);
  const [backers, setBackers] = useState(5007);
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
        <p>${backed} of $100,000 backed</p>
        <p>{backers} total backers</p>
        <p>56 days left</p>
      </section>
      <BackProjectModal pledgeAmount={pledgeAmount}></BackProjectModal>
    </div>
  );
}

export default App;
