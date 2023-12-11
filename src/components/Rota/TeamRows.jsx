import EditShiftButtons from './EditShiftButtons';

function TeamRows({ team, currentWeek }) {
	return team.map(teamMember => (
		<tr key={teamMember.capitalisedName()} className='rota row'>
			<TeamMemberCell teamMember={teamMember} />
			<ShiftCell teamMember={teamMember} currentWeek={currentWeek} />
		</tr>
	));
}

function TeamMemberCell({ teamMember }) {
	return <th className='rota cell name'>{teamMember.capitalisedName()}</th>;
}

function ShiftCell({ currentWeek, teamMember }) {
	return currentWeek.days.map(day => (
		<td key={day.dayName} className='rota cell shift'>
			<p className='shift-data'>{day.shifts.get(teamMember)?.formatShift()}</p>
			{/* EDITSHIFTBTNS */}
			<EditShiftButtons />
		</td>
	));
}

export default TeamRows;
