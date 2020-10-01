import React from "react";

const Filter = ({ filterResults }) => {
  return (
    <div>
      <form>
        {" "}
        filter shown with
        <input onChange={filterResults} />
      </form>
    </div>
  );
};
export default Filter;
