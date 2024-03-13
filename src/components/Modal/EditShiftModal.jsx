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
  const { isModalOpen, handleCloseModal } = useContext(ShiftModalContext);
  const [shiftTimes, setShiftTimes] = useState(initialShiftTimes);

  const startTimeInputRef = useRef(null);

  // Focus on start time input
  useEffect(() => {
    if (isModalOpen && startTimeInputRef.current) {
      startTimeInputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleTimeInputChange = event => {
    const { name, value } = event.target;
    setShiftTimes(previousShiftData => ({
      ...previousShiftData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Logic to update the shift in the current week's data
    // You'll need to implement the logic to update the shift
    // based on the shiftTimes state
    setShiftTimes(initialShiftTimes);
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
              onChange={handleTimeInputChange}
              required
              id='start'
              name='start'
            />
            <TimeInput
              label='Select an end time:'
              value={shiftTimes.endTime}
              onChange={handleTimeInputChange}
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
