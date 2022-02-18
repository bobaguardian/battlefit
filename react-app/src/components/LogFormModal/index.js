import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import LogForm from './LogForm';

function LogFormModal({ type, exercise_id, exerciseName }) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        {type === "create" ?
        <button
          className='add-log-btn'
          onClick={() => setShowModal(true)}>

          Add a Log
        </button>
        :
        <button
            className='edit-log-btn'
            onClick={() => setShowModal(true)}>

            Edit Log
        </button>
        }
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LogForm showModal={setShowModal} type={type} exerciseName={exerciseName} exercise_id={exercise_id} />
          </Modal>
        )}
      </>
    );
  }

  export default LogFormModal;
