import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';

function EditShiftButtons() {
	return (
		<>
			<div className="edit_group">
				<Button className={'shift edit'}>
					<EditIcon />
				</Button>
				<Button className={'shift  delete'}>
					<DeleteIcon />
				</Button>
			</div>
		</>
	);
}

export default EditShiftButtons;
