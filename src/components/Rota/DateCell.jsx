function DateCell({ currentWeek }) {
	return currentWeek.days.map(day => (
		<th key={day.formattedDate}>{day.getFormattedDate()}</th>
	));
}

export default DateCell;
