import Week from '../../classes/weekly/week';
import team from '../../data/team';
import DateCell from './DateCell';
import TeamRows from './TeamRows';

const currentWeek = new Week(new Date());

function TableRota() {
	return (
		<table>
			<thead>
				<tr>
					<th>Team Member</th>
					<DateCell currentWeek={currentWeek} />
				</tr>
			</thead>
			<tbody>
				<TeamRows team={team} currentWeek={currentWeek} />
			</tbody>
			<tfoot></tfoot>
		</table>
	);
}

export default TableRota;

console.log(currentWeek.days);
