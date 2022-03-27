import React, { useState, useRef  } from 'react';
import IOModal from './IOModal';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
const ToolBar = () => {
  const [showModal, setShowModal] = useState(false);
  const myRef=useRef()
  const [msgTitle, setMsgTitle] = useState('IN');
  return (
    <div className="toolBar">
      <IOModal
        ptype={msgTitle}
        show={showModal}
        ref={myRef}
        onShow={()=>myRef.current.updateState()}
        onHide={() => {
          setShowModal(false);
        }}
      />
      <button
        className="d-flex flex-column  text-center btn btn-success rounded-pill justify-content-between align-items-center"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
          setMsgTitle('IN');
        }}
      >
        <PlusCircle />
        <h6>In</h6>
      </button>
      <button
        className="d-flex flex-column text-center  btn btn-danger rounded-pill align-items-center"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
          setMsgTitle('OUT');
        }}
      >
        <DashCircle />
        <h6>Out</h6>
      </button>
    </div>
  );
};
export default ToolBar;
