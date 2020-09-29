import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.action}>{props.name}</button>;
};
const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button action={props.giveFeedback.voteGood} name="good" />
      <Button action={props.giveFeedback.voteNeutral} name="neutral" />
      <Button action={props.giveFeedback.voteBad} name="bad" />
    </div>
  );
};

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad } = props.votes;
  const all = bad + good + neutral;
  const average = (bad * -1 + good * 1 + neutral * 0) / (bad + good + neutral);
  const positive = `${(good / (bad + good + neutral)) * 100}%`;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        {" "}
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </div>
    );
  }
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const voteGood = () => {
    setGood(good + 1);
  };
  const voteNeutral = () => {
    setNeutral(neutral + 1);
  };
  const voteBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Feedback giveFeedback={{ voteGood, voteNeutral, voteBad }} />
      <Statistics votes={{ good, neutral, bad }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
