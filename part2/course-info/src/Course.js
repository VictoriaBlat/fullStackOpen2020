import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, cv) => {
    return acc + cv.exercises;
  }, 0);
  return (
    <>
      <p>total of {sum} exercises </p>
    </>
  );
};

export default Course;
