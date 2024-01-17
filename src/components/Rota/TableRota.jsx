import team from '../../data/team';
import DateCell from './DateCell';
import TeamRows from './TeamRows';
import '../../styles/Rota.css';
import table from '../../styles/Table.module.css';
import HoursRow from './HoursRow';
import { useContext } from 'react';
import { ShiftsContext } from '../../contexts/ShiftsContext';

function TableRota() {
	const { shifts: selectedWeek } = useContext(ShiftsContext);

	return (
		<div className='table-container feature'>
			<table className={table.layout}>
				<caption
					data-rota-date={`${selectedWeek.days[0].formattedDate}`}
					className={table.title}
				>
					Week Rota {selectedWeek.days[0].formattedDate}
				</caption>

				<thead className={table.header}>
					<tr className={table.row}>
						<th className={table.team}>Team Member</th>
						<DateCell currentWeek={selectedWeek} />
					</tr>
				</thead>

				<tbody className={table.body}>
					<TeamRows team={team} currentWeek={selectedWeek} />
				</tbody>

				<tfoot className={table.footer}>
					<HoursRow currentWeek={selectedWeek} />
				</tfoot>
			</table>
		</div>
	);
}

export default TableRota;
