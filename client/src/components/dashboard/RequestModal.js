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
import { FaAngleDown, FaPiedPiperHat } from "react-icons/fa";

class SendModal extends Component {
  state = {
    modal: false,
    toAddress: "",
    amount: ""
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
                <p style={{ maxWidth: "90%" }}>Input</p>
                <p>Button</p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SendModal;
