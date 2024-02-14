import Week from '../classes/weekly/week';
import EditShiftModal from '../components/Modal/EditShiftModal';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';
import { ModalProvider } from '../context/ModalContext';
import { ShiftsProvider } from '../context/shiftsContext';

const CurrentWeek = new Week();

// *Add shifts for each team member on each day
for (const teamMember of team) {
  for (const day of CurrentWeek.days) {
    const startTime = '07:00';
    const endTime = '16:00';
    day.addShift(teamMember, startTime, endTime);
  }
}

/**
 *
 * @returns {React.JSX.Element} Main component that brings together all other sub-components to make the Rota Table and its functionalities
 */
function Rota() {
  return (
    <ShiftsProvider>
      <ModalProvider>
        <TableRota selectedWeek={CurrentWeek} />
        <EditShiftModal />
      </ModalProvider>
    </ShiftsProvider>
  );
}
// *The method need to be called upon initialisation to be able to have a first calculation
CurrentWeek.calculateHoursOfWeek();

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted

// console.log(CurrentWeek.days);
// console.log(CurrentWeek.days[0].shifts);
