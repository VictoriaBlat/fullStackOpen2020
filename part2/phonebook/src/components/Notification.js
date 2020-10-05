import React from "react";

const Notification = ({ message, style }) => {
  if (message === null) {
    return null;
  } else return <div style={style.netStyle}>{message}</div>;
};

export default Notification;
