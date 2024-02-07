import { useContext, useEffect, useRef } from 'react';
import Button from '../Button';
import Modal from './Modal';
import { ModalContext } from '../../context/ModalContext';
import button from '../../styles/Button.module.css';
import modal from '../../styles/Modal.module.css';

function EditShiftModal() {
  const { isModalOpen, currentShiftTimes, setCurrentShiftTimes } =
    useContext(ModalContext);
  const startTimeInputRef = useRef(null);

  useEffect(() => {
    //Focus on start time input
    if (isModalOpen && startTimeInputRef.current) {
      startTimeInputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleStartTimeChange = event => {
    setCurrentShiftTimes({
      ...currentShiftTimes,
      startTime: event.target.value,
    });
  };

  const handleEndTimeChange = event => {
    setCurrentShiftTimes({
      ...currentShiftTimes,
      endTime: event.target.value,
    });
  };

  return (
    <Modal isOpen={isModalOpen} hasCloseBtn onClose>
      <div className={modal.header}>
        <h2>Edit Shift</h2>
      </div>
      <div className={modal.body}>
        <form className={`${modal.edit} ${modal.shift}`}>
          <label className={modal.label}>Select a start time:</label>
          <input
            className={modal.input}
            type='time'
            id='start'
            name='start'
            min={'07:00'}
            value={currentShiftTimes.startTime || '00:00'}
            onChange={handleStartTimeChange}
            required
          />
          <label className={modal.label}>Select an end time:</label>
          <input
            className={modal.input}
            type='time'
            id='end'
            name='end'
            max={'00:30'}
            value={currentShiftTimes.endTime || '00:00'}
            onChange={handleEndTimeChange}
            required
          />
        </form>
      </div>
      <div className={modal.footer}>
        <div className={`${button.group} ${button.gap}`}>
          <Button
            className={`${button.accept} ${button.action}`}
            form='edit-shift'
            type='submit'
          >
            Accept
          </Button>
          <Button className={`${button.cancel} ${button.action}`}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditShiftModal;
