import React, { useEffect, useState } from 'react';

import { Modal } from '../../../context/Modal';
import EditLogForm from './EditLogForm';

function EditLogFormModal({ eId, exerciseName, eDate, eUnit, eUnitCount, eComment }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setShowModal(true);
    }

    const handleCloseModal = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setShowModal(false);
    }

    useEffect(() => {
      return () => {
        setShowModal(false);
      }
    }, [])

    return (
      <>
        <button
          className='edit-log-btn shake-icon'
          onClick={handleShowModal}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <EditLogForm eId={eId} eDate={eDate} eUnit={eUnit} eUnitCount={eUnitCount} eComment={eComment}
            showModal={setShowModal} exerciseName={exerciseName} />
          </Modal>
        )}
      </>
    );
  }

  export default EditLogFormModal;
