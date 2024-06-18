import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Job Task</ModalHeader>
        <ModalBody>
          <Form>

            <FormGroup>
              <Label for="client-name">Name</Label>
              <Input
                type="text"
                id="client-name"
                name="name"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Full Name Here"
              />
            </FormGroup>

            <FormGroup>
              <Label for="client-address">Address</Label>
              <Input
                type="text"
                id="client-address"
                name="address"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Address Here"
              />
            </FormGroup>

            <FormGroup>
              <Label for="client-date">Date</Label>
              <Input
                type="date"
                id="client-date"
                name="date"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter the Date for Service Here"
              />
            </FormGroup>

            <FormGroup>
              <Label for="client-time">Time</Label>
              <Input
                type="time"
                id="client-time"
                name="time"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter the Time for Service Here"
              />
            </FormGroup>

            <FormGroup>
              <Label for="client-service">Service Description</Label>
              <Input
                type="text"
                id="client-service"
                name="service"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Service to be Rendered"
              />
            </FormGroup>

            <FormGroup>
              <Label for="client-cell">Cell Number</Label>
              <Input
                type="text"
                id="client-cell"
                name="cell number"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Cell Number Here"
              />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}