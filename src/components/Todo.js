import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalToOpen] = useState(false);

  function deleteHandler() {
    setModalToOpen(true);
  }

  function closeModalHandler() {
    setModalToOpen(false);
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen ? <Modal  onCancel={closeModalHandler} onConfirm={closeModalHandler} />: null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
    </div>
  );
}

export default Todo;
