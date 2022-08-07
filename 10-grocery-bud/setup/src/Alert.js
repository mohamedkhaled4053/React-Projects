import React from "react";

const Alert = ({ alert, alertValues }) => {
  let alertClass;
  if (alert === alertValues.add || alert === alertValues.edit) {
    alertClass = "alert-success";
  } else {
    alertClass = "alert-danger";
  }

  return <p className={`alert ${alertClass}`}>{alert}</p>;
};

export default Alert;
