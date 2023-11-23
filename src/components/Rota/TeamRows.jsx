import Button from '../Button';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';

function TeamRows({ team, currentWeek }) {
	return team.map(teamMember => (
		<tr key={teamMember.capitalisedName()}>
			<TeamMemberCell teamMember={teamMember} />
			<ShiftCell teamMember={teamMember} currentWeek={currentWeek} />
		</tr>
	));
}

function TeamMemberCell({ teamMember }) {
	return <td>{teamMember.capitalisedName()}</td>;
}

function ShiftCell({ currentWeek, teamMember }) {
	return currentWeek.days.map(day => (
		<td key={day.dayName}>
			<p>{day.shifts.get(teamMember)?.formatShift()}</p>

			<div className='icons-container'>
				<Button>
					<EditIcon />
				</Button>
				<Button>
					<DeleteIcon />
				</Button>
			</div>
		</td>
	));
}

export default TeamRows;
