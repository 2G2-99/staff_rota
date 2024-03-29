import Week from '../classes/weekly/week';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';
import { useEffect, useState } from 'react';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ShiftModalProvider } from '../context/ShiftModalContext';
import { WeekProvider } from '../context/WeekContext';

/**
 *
 * @returns {React.JSX.Element} Main component that brings together all other sub-components to make the Rota Table and its functionalities
 */
function Rota() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeek, setCurrentWeek] = useState(null);

  useEffect(() => {
    const week_1 = new Week();
    setCurrentWeek(week_1);
  }, []);

  useEffect(() => {
    if (currentWeek) {
      // for (const teamMember of team) {
      //   for (const day of currentWeek.days) {
      //     const startTime = '07:00';
      //     const endTime = '16:00';
      //     day.addShift(teamMember, startTime, endTime);
      //   }
      // }
      // // Calculate hours of the week
      // currentWeek.calculateHoursOfWeek();
      setIsLoading(false); // Shifts have been added and hours calculated
    }
  }, [currentWeek]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <WeekProvider>
      <ShiftModalProvider>
        <TableRota selectedWeek={currentWeek} team={team} />
        <EditShiftModal />
      </ShiftModalProvider>
    </WeekProvider>
  );
}

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted
