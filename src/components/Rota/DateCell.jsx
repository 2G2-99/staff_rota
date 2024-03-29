import table from '../../styles/Table.module.css';

function DateCell({ currentWeek }) {
  return (
    <>
      {Array.from(currentWeek.days.values()).map(day => (
        <th key={day.formattedDate} className={table.date}>
          {day.getFormattedDate()}
        </th>
      ))}
    </>
  );
}

export default DateCell;
