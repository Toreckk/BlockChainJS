import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { IoMdDownload } from "react-icons/io";
import { FaPiedPiperHat, FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyNotification from "./CopyNotification";

class SendModal extends Component {
  state = {
    modal: false,
    publicAddress: "115md8GZ5S8CmvUj8a8cW58YcKvv2SekYf",
    copyNotifOpacity: 0
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //Add item via addItem action
    this.props.addItem(newItem);

    //close modal
    this.toggle();
  };

  onCopiedToClipboard = () => {
    this.setState({ copyNotifOpacity: 1 });
    setTimeout(() => {
      this.setState({ copyNotifOpacity: 0 });
    }, 1500);
  };

  render() {
    return (
      <div>
        <button className="transactionc-btn" onClick={this.toggle}>
          <IoMdDownload style={{ marginRight: "0.33em" }} />
          Request
        </button>
        <Modal
          className="modal-style d-flex"
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={{ width: "400px" }}
        >
          <CopyNotification opacity={this.state.copyNotifOpacity} />
          <ModalHeader toggle={this.toggle}>
            <IoMdDownload style={{ color: "#0e3578" }} /> Request Jaycoin
          </ModalHeader>
          <ModalBody style={{ paddingTop: "0" }}>
            <div className="d-flex flex-column justify-content-start">
              <p
                style={{
                  margin: "0.5em",
                  marginLeft: "0"
                }}
              >
                Currency
              </p>
              <div className="send-form-input d-flex justify-content-start">
                <FaPiedPiperHat
                  style={{
                    color: "green",
                    marginRight: "0.3em",
                    height: "1.4em"
                  }}
                />
                Jaycoin
              </div>
              <p style={{ marginTop: "1em", marginBottom: "0" }}>To</p>
              <div className="send-form-input" style={{ marginTop: "0" }}>
                My Wallet - 5 Jaycoin
              </div>
              <p style={{ marginTop: "1em", marginBottom: "0" }}>Address</p>
              <div className="d-flex flex-row">
                <p className="request-form-address">
                  {this.state.publicAddress}
                </p>
                <CopyToClipboard text={this.state.publicAddress}>
                  <button
                    className="copy-btn"
                    onClick={this.onCopiedToClipboard}
                  >
                    <FaCopy />
                  </button>
                </CopyToClipboard>
              </div>
              <Button
                onClick={this.toggle}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#0D6CF2",
                  fontWeight: "600"
                }}
                block
              >
                Done
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SendModal;
