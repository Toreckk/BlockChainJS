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
import { IoIosSend } from "react-icons/io";
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
          <IoIosSend style={{ marginRight: "0.33em" }} />
          Send
        </button>
        <Modal
          className="modal-style d-flex"
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={{ width: "400px" }}
        >
          <ModalHeader toggle={this.toggle}>
            <IoIosSend style={{ color: "#0e3578" }} /> Send Jaycoin
          </ModalHeader>
          <ModalBody>
            <div className="d-flex flex-direction-row justify-content-between">
              <div className="d-flex flex-column">
                <p>Currency</p>
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
              </div>
              <div xs="6" sm="6" className="d-flex flex-column ml-3">
                <p>From</p>
                <div className="send-form-input">My Wallet - 5 Jaycoin</div>
              </div>
            </div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="toAddress" className="mt-3">
                  To
                </Label>
                <Input
                  type="text"
                  name="toAddress"
                  id="toAddress"
                  placeholder="Paste a public key"
                  onChange={this.onChange}
                />
                <Label for="amount" className="mt-3">
                  Amount
                </Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="0"
                  onChange={this.onChange}
                />
                <Button
                  style={{ marginTop: "2rem", backgroundColor: "#0D6CF2" }}
                  block
                >
                  Send
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SendModal;
