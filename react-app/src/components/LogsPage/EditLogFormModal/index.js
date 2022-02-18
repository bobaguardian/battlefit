import React, { useEffect, useState } from 'react';

import { Modal } from '../../../context/Modal';
import EditLogForm from './EditLogForm';

function EditLogFormModal({ setShowEditDeleteMenu, exerciseName, eId, eDate, eUnit, eUnitCount, eComment }) {
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
      setShowEditDeleteMenu(false);
    }

    return (
      <>
        <button
          className='edit-log-btn'
          onClick={handleShowModal}>
          Edit
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
