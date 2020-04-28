import React from "react";
import { Spinner } from "reactstrap";

function Loader() {
  return (
    <div className="spinner-container">
      <Spinner color="danger" style={{ width: "120px", height: "120px" }} />
    </div>
  );
}

export default Loader;
