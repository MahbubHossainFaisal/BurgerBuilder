import React from 'react';
import './Modal.css';
import Dux from '../../../hoc/Dux';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
  <Dux>
      <Backdrop show={props.show}  clicked={props.modalClosed}/>
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Dux>
);

export default modal;