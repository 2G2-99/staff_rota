import React, { useContext, useEffect, useRef } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { ShiftsContext } from '../../context/shiftsContext';
import Button from '../Button';
import Modal from './Modal';
import button from '../../styles/Button.module.css';
import modal from '../../styles/Modal.module.css';

function EditShiftModal() {
	const { isModalOpen, closeModal, currentShiftTimes, setCurrentShiftTimes } =
		useContext(ModalContext);
	const { shifts, addShift, updateShift } = useContext(ShiftsContext);

	const startTimeInputRef = useRef(null);

	useEffect(() => {
		//Focus on start time input
		if (isModalOpen && startTimeInputRef.current) {
			startTimeInputRef.current.focus();
		}
	}, [isModalOpen]);

	const handleStartTimeChange = ({ target: { value } }) => {
		setCurrentShiftTimes({
			...currentShiftTimes,
			startTime: value,
		});
	};

	const handleEndTimeChange = ({ target: { value } }) => {
		setCurrentShiftTimes({
			...currentShiftTimes,
			endTime: value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		closeModal();
	};

	return (
		<Modal isOpen={isModalOpen} hasCloseBtn onClose>
			<form onSubmit={handleSubmit}>
				<section id='modal-title' className={modal.header}>
					<h2>Edit Shift</h2>
				</section>
				<section className={modal.body} aria-labelledby='modal-title'>
					<fieldset className={`${modal.shift} ${modal.edit}`}>
						<TimeInput
							label='Select a start time:'
							value={currentShiftTimes.startTime}
							onChange={handleStartTimeChange}
							required
							id='start'
							name='start'
						/>
						<TimeInput
							label='Select an end time:'
							value={currentShiftTimes.endTime}
							onChange={handleEndTimeChange}
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

export default React.memo(EditShiftModal);
