const Options = ({incrementClick}) => {
  return (
    <div>
      <button onClick={() => incrementClick('good')}>Good</button>
      <button>Neutral</button>
      <button> Bad</button>
      {/* <button>Reset</button> */}
    </div>
  );
};

export default Options;
