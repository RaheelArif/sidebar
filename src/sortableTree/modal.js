import React from "react";
import { Modal, Button, Input } from "antd";

export default class ModalBtn extends React.Component {
  state = { visible: false, title: "" };

  showModal = () => {
    this.setState({
      visible: true,
      name: this.props.node.name,
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      name: value
    });
  };

  handleOk = e => {
    this.props.onEdit(this.state.name);

  };

  handleCancel = e => {
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        {this.props.render(this.showModal)}
        <Modal
          title="Edit"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          Title:{" "}
          <Input
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </Modal>
      </div>
    );
  }
}
