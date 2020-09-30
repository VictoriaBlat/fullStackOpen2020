import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />

      <Total parts={course.parts} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} info={part} />);
};
const Part = ({ info }) => {
  return (
    <>
      <p>
        {info.name} {info.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  const sum = props.parts.reduce((acc, cv) => {
    return acc + cv.exercises;
  }, 0);
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
