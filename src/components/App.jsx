/* import React from 'react'; */

import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  
  const incrementClick = (type) => {
    setClicks((prevClick) => {
      // prevClicks містить попереднє значення стану clicks
      return {
        ...prevClick, // Копіюємо всі попередні значення стану
        [type]: prevClick[type] + 1 // Оновлюємо значення для обраного типу кліків
      };
    });
  };

  

  return (
    <>
      <Description />
      <Options incrementClick={incrementClick} click={clicks}  />
      <Feedback click={clicks} />
    </>
  );
};

export default App;
