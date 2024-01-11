import table from '../../styles/Table.module.css';

function HoursRow({ currentWeek }) {
	const totalHours = currentWeek.hours;

	return (
		<>
			<tr className={table.row}>
				<th className={table.daily}>daily hours</th>
				{currentWeek.days.map(renderDailyHours)}
			</tr>

			<tr className={table.row}>
				<th className={table.total}> total Hours</th>
				<td className={table.data} colSpan={7}>
					<p>{totalHours}</p>
				</td>
			</tr>
		</>
	);
}

function renderDailyHours(day) {
	const key = `${day.formattedDate} - ${day.hours}`;
	return (
		<td key={key} className={table.data}>
			<p>{day.hours}</p>
		</td>
	);
}

export default HoursRow;
