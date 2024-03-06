import Button from '../Button';
import Modal from './Modal';
import button from '../../styles/Button.module.css';
import modal from '../../styles/Modal.module.css';

function EditShiftModal() {
  const handleTimeChange = ({ target: { value } }) => {
    return value;
  };

  return (
    <Modal isOpen={true} hasCloseBtn onClose>
      <form>
        <section id='modal-title' className={modal.header}>
          <h2>Edit Shift</h2>
        </section>
        <section className={modal.body} aria-labelledby='modal-title'>
          <fieldset className={`${modal.shift} ${modal.edit}`}>
            <TimeInput
              label='Select a start time:'
              onChange={handleTimeChange}
              required
              id='start'
              name='start'
            />
            <TimeInput
              label='Select an end time:'
              onChange={handleTimeChange}
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
            <Button className={`${button.cancel} ${button.action}`}>
              Cancel
            </Button>
          </div>
        </section>
      </form>
    </Modal>
  );
}

function TimeInput({ label, value, onChange, required, id, name }) {
  return (
    <label className={modal.label}>
      {label}
      <input
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
