import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import table from '../../styles/Table.module.css';
import button from '../../styles/Button.module.css';

function EditShiftButtons() {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div className={`${table.buttons} ${button.group}`}>
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
