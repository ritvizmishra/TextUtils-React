import React from "react";

function Alerts(props) {
    const capitalizeAlert = (alertType) => {
        const lowerCase = alertType.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalizeAlert(props.alert.type)}</strong>: {props.alert.message}
    </div>
  );
}

export default Alerts;
