import { useState } from 'react';
import Week from '../classes/weekly/week';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ModalContext } from '../context/ModalContext';
import { ShiftsContext } from '../context/shiftsContext';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';

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
 * @param {React.JSX.Element} children A single or multiple components that will have access to the Shifts context
 *
 */
function ShiftsProvider({ children }) {
  const [shifts, setShifts] = useState(new Map());

  const addShift = (dayInstance, teamMember, shift) => {
    dayInstance.addShift(teamMember, shift);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts)),
    );
  };

  const removeShift = (dayInstance, teamMember) => {
    dayInstance.removeShift(teamMember);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts)),
    );
  };

  const updateShift = (dayInstance, teamMember, updatedShift) => {
    dayInstance.modifyShift(teamMember, updatedShift);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts)),
    );
  };

  return (
    <ShiftsContext.Provider
      value={{ shifts, addShift, removeShift, updateShift }}
    >
      {children}
    </ShiftsContext.Provider>
  );
}

/**
 *
 * @returns {React.JSX.Element} Main component that brings together all other sub-components to make the Rota Table and its functionalities
 */
function Rota() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isEditModalOpen, setEditModalOpen }}>
      <ShiftsProvider>
        <TableRota selectedWeek={CurrentWeek} />
        <EditShiftModal />
      </ShiftsProvider>
    </ModalContext.Provider>
  );
}
// *The method need to be called upon initialisation to be able to have a first calculation
CurrentWeek.calculateHoursOfWeek();

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted

console.log(CurrentWeek.days);
console.log(CurrentWeek.days[0].shifts);
