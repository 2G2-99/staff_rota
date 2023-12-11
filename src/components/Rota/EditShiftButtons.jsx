import { useContext } from 'react';
import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import { ModalContext } from '../Modal/ModalContext';

function EditShiftButtons() {
	const { setEditModalOpen } = useContext(ModalContext);

	const handleEdit = () => setEditModalOpen(true);

	return (
		<div className='edit_group'>
			<Button className={'shift edit'} onClick={handleEdit}>
				<EditIcon />
			</Button>
			<Button className={'shift  delete'}>
				<DeleteIcon />
			</Button>
		</div>
	);
}

export default EditShiftButtons;
