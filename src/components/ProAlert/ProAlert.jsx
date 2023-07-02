import React, { useState } from "react";
import { Alert } from "@mui/material";
import "./ProAlert.scss";

const ProAlert = ({ header }) => {
  return (
    // <Alert className="alert" severity="info" icon={false}>
    //   {header}
    // </Alert>
    <div className="alert">
      <span>{header}</span>
    </div>
  );
};
export default ProAlert;
