/* import App from "../App"; */

/* const Feedback = ({good,neutral,bad}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}; */

const Feedback = (props) => {
  return (
    <div>
      <p>Good: {props.click.good}</p>
      <p>Neutral: {props.click.neutral}</p>
      <p>Bad: {props.click.neutral}</p>
    </div>
  );
};

export default Feedback;
