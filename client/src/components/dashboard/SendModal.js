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

class SendModal extends Component {
  state = {
    modal: false,
    name: ""
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
          className="modal-style"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            <IoIosSend /> Send Jaycoin
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add item"
                  onChange={this.onChange}
                />
                <Button
                  style={{ marginTop: "2rem", backgroundColor: "#0D6CF2" }}
                  block
                >
                  Add Item
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
