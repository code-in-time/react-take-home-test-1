import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import Chart from './Chart';

const ModalWindow = (props) => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Open modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <h2>View last 500 readings</h2>
        <div>
          <Chart />
        </div>
      </Modal>
    </div>
  )

}

export default ModalWindow;