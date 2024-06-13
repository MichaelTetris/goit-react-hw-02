/* import React from 'react'; */

import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

import { useState } from "react";

const incrementClick = (type) => {
  setClicks((prevClicks) => ({
    ...prevClicks,
    [type]: prevClicks[type] + 1,
  }
  ));
  /* console.log(prevClicks); */
};

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  

  return (
    <>
      <Description />
      <Options incrementClick={incrementClick} />
      <Feedback onClick={clicks} />
    </>
  );
};

export default App;

