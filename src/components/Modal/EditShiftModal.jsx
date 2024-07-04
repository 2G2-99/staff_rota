import Button from '../Button';
import Modal from './Modal';
import button from '../../styles/Button.module.css';
import modal from '../../styles/Modal.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { ShiftModalContext } from '../../context/ShiftModalContext';

const initialShiftTimes = {
  startTime: '00:00', // Default start time
  endTime: '00:00', // Default end time
};

function EditShiftModal() {
  const { isModalOpen, handleCloseModal, modalData, updateShift } =
    useContext(ShiftModalContext);
  const [shiftTimes, setShiftTimes] = useState(initialShiftTimes);

  // Reference to the inputs in the DOM
  const startTimeInputRef = useRef(null);
  const endTimeInputRef = useRef(null);

  // Focus on start time input
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        startTimeInputRef.current.focus();

        startTimeInputRef.current.value = modalData.shift.startTime;
        endTimeInputRef.current.value = modalData.shift.endTime;
      }, 0);
    }
  }, [isModalOpen, modalData]);

  // Sync shiftTimes with modalData when modalData changes
  useEffect(() => {
    if (modalData.shift) {
      setShiftTimes({
        startTime: modalData.shift.startTime,
        endTime: modalData.shift.endTime,
      });
    }
  }, [modalData]);

  const handleTimeChange = (event, timeType) => {
    const { value } = event.target;

    setShiftTimes(previousShiftTimes => ({
      ...previousShiftTimes,
      [timeType]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateShift(shiftTimes);
    setShiftTimes(initialShiftTimes);
    handleCloseModal();
  };

  return (
    <Modal isOpen={isModalOpen} hasCloseBtn={true} onClose>
      <form onSubmit={handleSubmit}>
        <section id='modal-title' className={modal.header}>
          <h2>Edit Shift</h2>
        </section>
        <section className={modal.body} aria-labelledby='modal-title'>
          <fieldset className={`${modal.shift} ${modal.edit}`}>
            <TimeInput
              refElement={startTimeInputRef}
              label='Select a start time:'
              value={shiftTimes.startTime}
              onChange={event => handleTimeChange(event, 'startTime')}
              required
              id='start'
              name='start'
            />
            <TimeInput
              refElement={endTimeInputRef}
              label='Select an end time:'
              value={shiftTimes.endTime}
              onChange={event => handleTimeChange(event, 'endTime')}
              required
              id='end'
              name='end'
            />
          </fieldset>
        </section>
        <section className={modal.footer}>
          <div className={`${button.group} ${button.gap}`}>
            <Button
              className={`${button.accept} ${button.action}`}
              form='edit-shift'
              type='submit'
            >
              Accept
            </Button>
            <Button
              className={`${button.cancel} ${button.action}`}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </div>
        </section>
      </form>
    </Modal>
  );
}

function TimeInput({ label, value, onChange, required, id, name, refElement }) {
  return (
    <label className={modal.label}>
      {label}
      <input
        ref={refElement}
        className={modal.input}
        type='time'
        id={id}
        name={name}
        value={value || '00:00'}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default EditShiftModal;
