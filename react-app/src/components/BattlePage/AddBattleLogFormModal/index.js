import React, { useEffect, useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddBattleLogForm from './AddBattleLogForm';

function AddBattleLogFormModal({ battleId, exercise_id, exerciseName, monsterName }) {
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
            <AddBattleLogForm showModal={setShowModal} battleId={battleId} exerciseName={exerciseName} exercise_id={exercise_id} monsterName={monsterName}/>
          </Modal>
        )}
      </>
    );
  }

  export default AddBattleLogFormModal;
