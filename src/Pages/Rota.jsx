import Week from '../classes/weekly/week';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';
import { useEffect, useState } from 'react';

/**
 *
 * @returns {React.JSX.Element} Main component that brings together all other sub-components to make the Rota Table and its functionalities
 */
function Rota() {
  const [currentWeek, setCurrentWeek] = useState(null);

  useEffect(() => {
    const week_1 = new Week();
    setCurrentWeek(week_1);

    // * This other Week instances will be use later to access the advanced weeks
    // const week_2 = new Week(1);
    // const week_3 = new Week(2);
    // const week_4 = new Week(3);

    // *Add shifts for each team member on each day
    for (const teamMember of team) {
      for (const day of week_1.days) {
        const startTime = '07:00';
        const endTime = '16:00';
        day.addShift(teamMember, startTime, endTime);
      }
    }

    // *The method need to be called upon initialisation to be able to have a first calculation
    week_1.calculateHoursOfWeek();
  }, []);

  if (!currentWeek) {
    return <div>Loading...</div>;
  }

  return <TableRota selectedWeek={currentWeek} team={team} />;
}

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted
