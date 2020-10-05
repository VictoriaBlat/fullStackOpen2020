import React from "react";

const PersonForm = (props) => {
  //   console.log({ seters }, { contactInput });
  return (
    <div>
      <form>
        <div>
          name: <input value={props.newName} onChange={props.addNewName} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={props.addNewNumber} />
        </div>

        <div>
          <button onClick={props.addContact} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
