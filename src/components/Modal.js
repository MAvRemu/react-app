function Modal(props) {

  function cancelHandler() {
    props.onCancel()
  }

  function confirmHandler() {
    props.onConfirm()
  }


  return (
  <div className="modal">
  <h1>Are you sure?</h1>
  <button className="btn" onClick={confirmHandler} >Yes</button>
  <button className="btn" onClick={cancelHandler}>No</button>
  </div>
  );
}

export default Modal;
