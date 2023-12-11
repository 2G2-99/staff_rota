import { useContext } from 'react';
import Button from '../Button';
import Modal from './Modal';
import { ModalContext } from './ModalContext';
import button from '../../styles/Button.module.css';

function EditShiftModal() {
	const { isEditModalOpen, setEditModalOpen } = useContext(ModalContext);

	const handleCloseModal = () => setEditModalOpen(false);

	return (
		<Modal isOpen={isEditModalOpen} hasCloseBtn onClose={handleCloseModal}>
			<div className='modal_header'>
				<h2>Testing Modal</h2>
			</div>
			<div className='modal_body'>
				<form id='edit-shift'>
					<label htmlFor='appt'>Select a start time:</label>
					<input type='time' id='start' name='start' min={'07:00'} />
					<label htmlFor='appt'>Select an end time:</label>
					<input type='time' id='end' name='end' max={'00:30'} />
				</form>
			</div>
			<div className='modal_footer'>
				<Button className={button.accept} form='edit-shift' type='submit'>
					Accept
				</Button>
				<Button className={button.cancel}>Cancel</Button>
			</div>
		</Modal>
	);
}

export default EditShiftModal;
