import table from '../../styles/Table.module.css';

function DateCell({ currentWeek }) {
	return currentWeek.days.map(day => (
		<th key={day.formattedDate} className={table.date}>
			{day.getFormattedDate()}
		</th>
	));
}

export default DateCell;
