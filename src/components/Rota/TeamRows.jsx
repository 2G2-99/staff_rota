import { useContext } from 'react';
import table from '../../styles/Table.module.css';
import EditShiftButtons from './EditShiftButtons';
import { ShiftsContext } from '../../contexts/ShiftsContext';

function TeamRows({ team, currentWeek }) {
	const { deleteShift } = useContext(ShiftsContext);

	const handleDeleteShift = (teamMember, day) => {
		// Call the deleteShift function with the team member and the date of the shift to be deleted
		deleteShift(teamMember, day);
	};

	return team.map(teamMember => (
		<tr key={teamMember.capitalisedName()} className={table.row}>
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
	return <th className={table.name}>{teamMember.capitalisedName()}</th>;
}

function ShiftCell({ currentWeek, teamMember, onDeleteShift }) {
	return currentWeek.days.map(day => (
		<DayData
			key={day.dayName}
			day={day}
			teamMember={teamMember}
			onDeleteShift={onDeleteShift}
		/>
	));
}

function DayData({ day, teamMember, onDeleteShift }) {
	return (
		<td className={table.shift}>
			<ShiftData day={day} teamMember={teamMember} />
			<EditShiftButtons
				teamMember={teamMember}
				day={day}
				onDeleteShift={onDeleteShift}
			/>
		</td>
	);
}

function ShiftData({ day, teamMember }) {
	return (
		<p className={table.data}>{day.shifts.get(teamMember)?.formatShift()}</p>
	);
}

export default TeamRows;
