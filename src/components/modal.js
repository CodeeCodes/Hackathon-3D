import React, { Component } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Chart from "./chartRatings";
Modal.setAppElement(document.getElementById("root"));

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className='modal__button'>
          OPEN
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel='Graph Model'
          className='modal'>
          <Chart />
          <button onClick={this.handleCloseModal} className='modal__button'>
            CLOSE
          </button>
        </Modal>
      </div>
    );
  }
}

const props = {};
ReactDOM.render(<Main {...props} />, document.getElementById("root"));
