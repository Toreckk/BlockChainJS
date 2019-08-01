import React from "react";

const CopyNotification = props => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        borderLeft: "6px solid green",
        color: "black",
        padding: "16px",
        position: "fixed",
        opacity: `${props.opacity}`,
        top: "10%",
        right: "6%",
        zIndex: "999",
        transition: "all 0.5s"
      }}
      className="d-flex justify-content-between"
    >
      Public key successfully copied to clipboard!
    </div>
  );
};

export default CopyNotification;
