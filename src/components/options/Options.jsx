


const Options = ({incrementClick}) => {
  
  
  return (
    <div>
      <button onClick={() => incrementClick('good')}>Good</button>
      <button onClick={() => incrementClick('neutral')}>Neutral</button>
      <button onClick={() => incrementClick('bad')}> Bad</button>
      {/* <button>Reset</button> */}
    </div>
  );
};

export default Options;
