/* import React from 'react'; */

import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

import { useState } from "react";

const incrementClick = (value) => {
  console.log(value);
  /* setClicks((prevClicks) => ({
    ...prevClicks,
    [type]: prevClicks[type] + 1,
  }
  )); */
  /* console.log(prevClicks); */
};

const App = () => {
  const [clicks, setClicks] = useState({
    good: "0",
    neutral: "0",
    bad: "0",
  });
  

  

  

  return (
    <>
      <Description />
      <Options incrementClick={incrementClick} onClick= {clicks} />
      <Feedback click={clicks} />
    </>
  );
};

export default App;

