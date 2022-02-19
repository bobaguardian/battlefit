import React, { useEffect, useState } from 'react';

import { Modal } from '../../../context/Modal';
import AddLogForm from './AddLogForm';

function AddLogFormModal({ exercise_id, exerciseName }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      return () => {
        setShowModal(false);
      }
    }, []);


    return (
      <>
        <button
          className='add-log-btn'
          onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-calendar-plus"></i>
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddLogForm showModal={setShowModal} exerciseName={exerciseName} exercise_id={exercise_id} />
          </Modal>
        )}
      </>
    );
  }

  export default AddLogFormModal;
