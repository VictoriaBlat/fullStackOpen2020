import React from "react";

const Persons = (props) => {
  const view = props.search ? props.search : props.data;
  return view.map((el) => {
    return (
      <div key={el.name}>
        {el.name}
        {"  "}
        {el.number}
        <button onClick={() => props.deleteNumber(el.id, el.name)}>
          delete
        </button>
      </div>
    );
  });
};

export default Persons;
