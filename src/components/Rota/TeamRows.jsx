import EditShiftButtons from './EditShiftButtons';

function TeamRows({ team, currentWeek }) {
	const handleDeleteShift = (teamMember, day) => {
		if (day.shifts.has(teamMember)) {
			try {
				day.removeShift(teamMember);
			} catch (error) {
				console.error(error);
			}
		} else {
			console.log('No shifts to remove for team member:', teamMember);
		}
	};

	return team.map(teamMember => (
		<tr key={teamMember.capitalisedName()} className='rota row'>
			<TeamMemberCell teamMember={teamMember} />
			<ShiftCell
				teamMember={teamMember}
				currentWeek={currentWeek}
				onDeleteShift={handleDeleteShift}
			/>
		</tr>
	));
}

function TeamMemberCell({ teamMember }) {
	return <th className='rota cell name'>{teamMember.capitalisedName()}</th>;
}

function ShiftCell({ currentWeek, teamMember, onDeleteShift }) {
	return currentWeek.days.map(day => (
		<td key={day.dayName} className='rota cell shift'>
			<ShiftData day={day} teamMember={teamMember} />

			<EditShiftButtons
				teamMember={teamMember}
				day={day}
				onDeleteShift={onDeleteShift}
			/>
		</td>
	));
}

function ShiftData({ day, teamMember }) {
	return (
		<p className='shift-data'>{day.shifts.get(teamMember)?.formatShift()}</p>
	);
}

export default TeamRows;
