import { useContext } from 'react';
import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import { ModalContext } from '../Modal/ModalContext';

import button from '../../styles/Button.module.css';

function EditShiftButtons() {
	const { setEditModalOpen } = useContext(ModalContext);

	const handleEdit = () => setEditModalOpen(true);

	return (
		<div className='edit_group'>
			<Button className={`${button.shift} ${button.edit}`} onClick={handleEdit}>
				<EditIcon />
			</Button>
			<Button className={`${button.shift} ${button.delete}`}>
				<DeleteIcon />
			</Button>
		</div>
	);
}

export default EditShiftButtons;
