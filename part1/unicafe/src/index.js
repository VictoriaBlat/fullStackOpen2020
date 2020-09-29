import React, { useState } from "react";
import ReactDOM from "react-dom";

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={props.giveFeedback.voteGood}>good</button>
      <button onClick={props.giveFeedback.voteNeutral}>neutral</button>
      <button onClick={props.giveFeedback.voteBad}>bad</button>
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.votes;

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

        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {bad + good + neutral}</p>
        <p>
          average {(bad * -1 + good * 1 + neutral * 0) / (bad + good + neutral)}
        </p>
        <p>positive {(good / (bad + good + neutral)) * 100} %</p>
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
