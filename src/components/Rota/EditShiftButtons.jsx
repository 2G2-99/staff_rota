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
		<div className={`${button.group}`}>
			<Button className={`${button.shift} ${button.edit}`} onClick={handleEdit}>
				<EditIcon width={'2em'} height={'2em'} />
			</Button>
			<Button className={`${button.shift} ${button.delete}`}>
				<DeleteIcon width={'2em'} height={'2em'} />
			</Button>
		</div>
	);
}

export default EditShiftButtons;
