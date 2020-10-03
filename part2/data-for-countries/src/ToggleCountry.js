import React, { useState } from "react";
import CountryView from "./CountryView";

const ToggleCountry = ({ info }) => {
  const [isHidden, setIsHidden] = useState(true);
  const showCountry = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <button onClick={showCountry}>show</button>
      {!isHidden && <CountryView info={info} />}
    </>
  );
};

export default ToggleCountry;
