import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';

function TeamRows({ team, currentWeek }) {
	return team.map(teamMember => (
		<tr key={teamMember.capitalisedName()} className='rota row'>
			<TeamMemberCell teamMember={teamMember} />
			<ShiftCell teamMember={teamMember} currentWeek={currentWeek} />
		</tr>
	));
}

function TeamMemberCell({ teamMember }) {
	return <td className='rota cell name'>{teamMember.capitalisedName()}</td>;
}

function ShiftCell({ currentWeek, teamMember }) {
	return currentWeek.days.map(day => (
		<td key={day.dayName} className='rota cell shift'>
			<p className='shift-data'>{day.shifts.get(teamMember)?.formatShift()}</p>

			<div className='btn-container'>
				<Button className={'shift edit'}>
					<EditIcon />
				</Button>
				<Button className={'shift  delete'}>
					<DeleteIcon />
				</Button>
			</div>
		</td>
	));
}

export default TeamRows;
