import team from '../../data/team';
import DateCell from './DateCell';
import TeamRows from './TeamRows';

function TableRota({ selectedWeek }) {
	return (
		<table className='table feature'>
			<caption
				data-rota-date={`${selectedWeek.days[0].formattedDate}`}
				className='title'
			>
				Week Rota {selectedWeek.days[0].formattedDate}
			</caption>
			<thead className='header'>
				<tr className='row'>
					<th className='heading team'>Team Member</th>
					<DateCell currentWeek={selectedWeek} />
				</tr>
			</thead>
			<tbody className='body'>
				<TeamRows team={team} currentWeek={selectedWeek} />
			</tbody>
			<tfoot className='footer'></tfoot>
		</table>
	);
}

export default TableRota;
