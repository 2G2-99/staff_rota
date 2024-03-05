import { createContext, useState } from 'react';

export const ShiftsContext = createContext(new Map());

/**
 *
 * @param {React.JSX.Element} children A single or multiple components that will have access to the Shifts context
 *
 */
export const ShiftsProvider = ({ children }) => {
  // ? Confirm uses of ShiftsContext and connect it to the Rota

  const [shifts, setShifts] = useState(new Map());

  const addShift = (dayInstance, teamMember, shift) => {
    dayInstance.addShift(teamMember, shift);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts))
    );
  };

  const removeShift = (dayInstance, teamMember) => {
    dayInstance.removeShift(teamMember);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts))
    );
  };

  const updateShift = (dayInstance, teamMember, updatedShift) => {
    dayInstance.modifyShift(teamMember, updatedShift);
    setShifts(
      prevShifts =>
        new Map(prevShifts.set(dayInstance.date, dayInstance.shifts))
    );
  };

  return (
    <ShiftsContext.Provider
      value={{ shifts, addShift, removeShift, updateShift }}
    >
      {children}
    </ShiftsContext.Provider>
  );
};
