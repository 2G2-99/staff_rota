import { useContext } from 'react';
import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import { ModalContext } from '../Modal/ModalContext';

import table from '../../styles/Table.module.css';
import button from '../../styles/Button.module.css';

function EditShiftButtons({ teamMember, day, onDeleteShift }) {
	const { setEditModalOpen } = useContext(ModalContext);

	const handleEdit = () => setEditModalOpen(true);
	const handleDelete = () => onDeleteShift(teamMember, day);

	return (
		<div
			className={`${table.buttons} ${button.group}`}
			style={{ width: '100%', height: '100%' }}
		>
			{/* To be able to take the full space of the parent it has been set to position	absolute */}
			<Button className={`${button.shift} ${button.edit}`} onClick={handleEdit}>
				<EditIcon width={'2em'} height={'2em'} />
			</Button>
			<Button
				className={`${button.shift} ${button.delete}`}
				onClick={handleDelete}
			>
				<DeleteIcon width={'2em'} height={'2em'} />
			</Button>
		</div>
	);
}

export default EditShiftButtons;
