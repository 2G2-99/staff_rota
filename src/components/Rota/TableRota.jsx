import team from '../../data/team';
import DateCell from './DateCell';
import TeamRows from './TeamRows';
import '../../styles/Rota.css';

function TableRota({ selectedWeek }) {
	return (
		<table className="table feature">
			<thead className="header">
				<tr className="row">
					<th className="heading team">Team Member</th>
					<DateCell currentWeek={selectedWeek} />
				</tr>
			</thead>
			<tbody className="body">
				<TeamRows team={team} currentWeek={selectedWeek} />
			</tbody>
			<tfoot className="footer"></tfoot>
		</table>
	);
}

export default TableRota;
