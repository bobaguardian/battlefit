import React, { useState, useEffect } from 'react';

import { Modal } from '../../../context/Modal';
import AddExerciseForm from './AddExerciseForm';

function AddExerciseFormModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => { // clean memory leaks
      return () => {
        setShowModal(false);
      }
    }, []);

    return (
      <>
        <button
          className='add-exercise-btn'
          onClick={() => setShowModal(true)}>
          Add an Exercise <i className="fa-solid fa-plus"></i>
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
