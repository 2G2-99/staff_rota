import { useContext, useEffect } from 'react';
import table from '../../styles/Table.module.css';
import EditShiftButtons from './EditShiftButtons';
import { ShiftModalContext } from '../../context/ShiftModalContext';

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
  return (
    <>
      {Array.from(currentWeek.days.values()).map(day => (
        <DayData key={day.dayName} teamMember={teamMember} day={day} />
      ))}
    </>
  );
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
  const { modalData } = useContext(ShiftModalContext);

  const formattedShift =
    day.shifts.get(teamMember)?.formatShift() ?? 'No Shift';

  // TODO: Re-render the the component with the new shift data after the form is submitted
  useEffect(() => {}, [modalData]);

  return <p className={table.data}>{formattedShift}</p>;
}

export default TeamRows;
