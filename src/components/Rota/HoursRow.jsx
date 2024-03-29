import table from '../../styles/Table.module.css';

function HoursRow({ currentWeek }) {
  const totalHours = currentWeek.hours;

  return (
    <>
      <tr className={table.row}>
        <th className={table.daily}>daily hours</th>
        {Array.from(currentWeek.days.values()).map(day => (
          <td key={day.dayName} className={table.data}>
            <p>{day.hours}</p>
          </td>
        ))}
      </tr>

      <tr className={table.row}>
        <th className={table.total}> total Hours</th>
        <td className={table.data} colSpan={7}>
          <p>{totalHours}</p>
        </td>
      </tr>
    </>
  );
}

export default HoursRow;
