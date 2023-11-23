function DateCell({ currentWeek }) {
	return currentWeek.days.map(day => (
		<th key={day.formattedDate} className='rota heading date'>
			{day.getFormattedDate()}
		</th>
	));
}

export default DateCell;
