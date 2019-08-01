import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";

const CopyNotification = props => {
  const onShow = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({ top: -100 }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification();
        }, 1000);
      });
    } else {
      this.showNotification();
    }
  };

  const showNotification = () => {
    this.setState(
      {
        top: 10
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({ top: -10 });
        }, 1000);
      }
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        borderLeft: "6px solid rgb(0, 135, 90)",
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
