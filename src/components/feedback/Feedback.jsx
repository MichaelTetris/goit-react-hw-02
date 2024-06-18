/* import App from "../App"; */


const Feedback = (props) => {
  return (
    <div>
      <p>Good: {props.click.good}</p>
      <p>Neutral: {props.click.neutral}</p>
      <p>Bad: {props.click.bad}</p>
      <p>Total: {props.count}</p>
      {props.procent > 0 ? <p>Positive: {props.procent} %</p> : <p>Positive: 0 %</p>}
    </div>
  );
};

export default Feedback;
