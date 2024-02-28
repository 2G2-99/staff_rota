import table from '../../styles/Table.module.css';
import EditShiftButtons from './EditShiftButtons';

function TeamRows({ team, currentWeek }) {
  return team.map(teamMember => (
    <tr key={teamMember.listBy('last')} className={table.row}>
      <TeamMemberCell teamMember={teamMember} />
      <ShiftCell teamMember={teamMember} currentWeek={currentWeek} />
    </tr>
  ));
}

function TeamMemberCell({ teamMember }) {
  return <th className={table.name}>{teamMember.listBy('first')}</th>;
}

function ShiftCell({ teamMember, currentWeek }) {
  return currentWeek.days.map(day => (
    <DayData key={day.dayName} teamMember={teamMember} day={day} />
  ));
}

function DayData({ teamMember, day }) {
  return (
    <td className={table.shift}>
      <ShiftData teamMember={teamMember} day={day} />
      <EditShiftButtons teamMember={teamMember} day={day} />
    </td>
  );
}

function ShiftData({ day, teamMember }) {
  return (
    <p className={table.data}>{day.shifts.get(teamMember)?.formatShift()}</p>
  );
}

export default TeamRows;
