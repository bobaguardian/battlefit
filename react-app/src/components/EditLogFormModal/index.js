import React, { useEffect, useState } from 'react';

import { Modal } from '../../context/Modal';
import EditLogForm from './EditLogForm';

function EditLogFormModal({ exerciseName, eId, eDate, eUnit, eUnitCount, eComment }) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button
          className='add-log-btn'
          onClick={() => setShowModal(true)}>
          Edit Log
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditLogForm eId={eId} eDate={eDate} eUnit={eUnit} eUnitCount={eUnitCount} eComment={eComment}
            showModal={setShowModal} exerciseName={exerciseName} />
          </Modal>
        )}
      </>
    );
  }

  export default EditLogFormModal;
