import { createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentShiftTimes, setCurrentShiftTimes] = useState({
    startTime: '00:00', // Default start time
    endTime: '00:00', // Default end time
  });

  /**
   * @param {object} teamMember Selected team member from whom add or update a shift
   * @param {object} shift Selected shift from the team member to which add or update startTime and endTime
   * @param {string} startTime Time input of start of shift
   * @param {string} endTime Time input of end of shift
   */
  const editShift = (
    teamMember,
    shift,
    startTime = '00:00',
    endTime = '00:00',
  ) => {
    if (shift) {
      setCurrentShiftTimes({
        startTime,
        endTime,
      });
    } else {
      shift = null;
    }

    console.log(shift);
    console.log(startTime, endTime);

    setModalOpen(true);
  };

  /**
   *
   * @param {object} teamMember Selected team member from which delete a shift
   * @param {object} day Selected day of the week from which delete a shift
   */
  const deleteShift = (teamMember, day) => {
    if (day.shifts.has(teamMember)) {
      day.removeShift(teamMember);
    } else {
      alert(
        `No shifts to remove for ${teamMember.capitalisedName()}:`,
        teamMember,
      );
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        currentShiftTimes,
        setCurrentShiftTimes,
        editShift,
        deleteShift,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
