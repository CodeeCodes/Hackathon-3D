import React, { Component } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Friends from "./friends";
import CloseButton from "../assets/close_button.png";
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
        <div className='videoPlayer__flex'>
          <button
            className='videoPlayer__social'
            onClick={this.handleOpenModal}>
            SOCIAL
          </button>
        </div>

        <div className='modal__main'>
          <Modal
            isOpen={this.state.showModal}
            contentLabel='Graph Model'
            className='modal'>
            <button
              onClick={this.handleCloseModal}
              className='modal__button-top-social'>
              SHARE
            </button>
            <Friends />
            <img
              src={CloseButton}
              onClick={this.handleCloseModal}
              alt='button'
              className='modal__close-button-social'
            />
          </Modal>
        </div>
      </div>
    );
  }
}

const props = {};
ReactDOM.render(<Main {...props} />, document.getElementById("root"));
