import React from "react";

const Persons = (props) => {
  return props.search.map((el) => {
    return (
      <div key={el.name}>
        {el.name}
        {"  "}
        {el.number}
      </div>
    );
  });
};

export default Persons;
