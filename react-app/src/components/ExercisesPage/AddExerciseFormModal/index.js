import React, { useState } from 'react';

import { Modal } from '../../../context/Modal';
import AddExerciseForm from './AddExerciseForm';

function AddExerciseFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button
          className='add-exercise-btn'
          onClick={() => setShowModal(true)}>

          <i className="fas fa-money-check-alt"></i> Add an Exercise
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddExerciseForm showModal={setShowModal} />
          </Modal>
        )}
      </>
    );
  }

  export default AddExerciseFormModal;