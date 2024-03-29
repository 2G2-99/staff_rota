import { createContext, useState } from 'react';
import Week from '../classes/weekly/week';

export const WeekContext = createContext();

export function WeekProvider({ children }) {
  const [currentWeek, setWeek] = useState(new Week());

  const updateShift = (dayIndex, teamMember, newShift) => {
    console.log(dayIndex);

    currentWeek.updateShift(dayIndex, teamMember, newShift);
    setWeek({ ...currentWeek }); // Trigger a re-render
  };

  return (
    <WeekContext.Provider value={{ currentWeek, setWeek, updateShift }}>
      {children}
    </WeekContext.Provider>
  );
}
