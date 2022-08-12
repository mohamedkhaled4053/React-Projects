import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import context from "./context";

const Modal = () => {
  let {toggleModal, showModal} = useContext(context)

  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
