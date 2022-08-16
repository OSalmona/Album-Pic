import React, { useState } from "react";

import Frame from "./Component/Frame";
import './Component/Frame.css';
const App = () => {
  const [page, setPage] = useState(1);

  const addNewPackage = e => {
    e.preventDefault();
    let p = parseInt(page ,10) + 1 ;
    setPage(p);
  };

  return (
    <div>
      <Frame pageNumer={page} />
      <div className="center">
      <button className="button" type="button" onClick={addNewPackage}>
        Show More
      </button>
      </div>
    </div>
  );
};

export default App;
