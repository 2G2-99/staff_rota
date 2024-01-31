import { useContext } from 'react';
import Button from '../Button';
import Modal from './Modal';
import { ModalContext } from '../../context/ModalContext';
import button from '../../styles/Button.module.css';
import modal from '../../styles/Modal.module.css';

function EditShiftModal({ startTime, endTime }) {
  const { isEditModalOpen, setEditModalOpen } = useContext(ModalContext);

  const handleCloseModal = () => setEditModalOpen(false);

  return (
    <Modal isOpen={isEditModalOpen} hasCloseBtn onClose={handleCloseModal}>
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
            placeholder={startTime}
            required
          />
          <label className={modal.label}>Select an end time:</label>
          <input
            className={modal.input}
            type='time'
            id='end'
            name='end'
            max={'00:30'}
            placeholder={endTime}
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
