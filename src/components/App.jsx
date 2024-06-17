/* import React from 'react'; */

import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Notification from "./notification/Notification";
import Options from "./options/Options";

import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const storedClicks = localStorage.getItem("clicks");
    if (storedClicks) {
      setClicks(JSON.parse(storedClicks));
      setHasData(true);
    }
  }, [clicks]);

  /* const incrementClick = (type) => {
    setClicks((prevClick) => {
      return {
        ...prevClick,
        [type]: prevClick[type] + 1,
      };
    });
    localStorage.setItem("clicks", JSON.stringify(incrementClick));
  }; */

  const updateClicks = (type) => {
    const newClicks = { ...clicks, [type]: clicks[type] + 1 };
    setClicks(newClicks);
    localStorage.setItem("clicks", JSON.stringify(newClicks));
  };

  const resetClicks = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("clicks");
    setHasData(false);
  };

  return (
    <>
      <Description />
      <Options
        updateClicks={updateClicks}
        click={clicks}
        onReset={resetClicks}
        hasData={hasData}
      />
      <Feedback click={clicks} />
      <Notification />
    </>
  );
};
/* localStorage.removeItem("clicks"); */

export default App;
