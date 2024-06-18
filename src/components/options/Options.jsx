const Options = ({ updateClicks, onReset, hasData }) => {
  return (
    <div>
      <button onClick={() => updateClicks("good")}>Good</button>
      <button onClick={() => updateClicks("neutral")}>Neutral</button>
      <button onClick={() => updateClicks("bad")}>Bad</button>
      {hasData !== 0 && <button onClick={onReset}>Reset</button>}
      {/* {hasData && <button onClick={() => onReset()}>Reset</button>} */}
      {/* <button>Reset</button> */}
    </div>
  );
};

export default Options;
