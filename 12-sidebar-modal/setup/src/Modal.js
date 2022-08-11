import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    <div class="modal-overlay show-modal">
      <div class="modal-container">
        <h3>modal content</h3>
        <button class="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
