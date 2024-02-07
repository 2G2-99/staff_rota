import { createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentShiftTimes, setCurrentShiftTimes] = useState({
    startTime: '00:00', // Default start time
    endTime: '00:00', // Default end time
  });

  /**
   *
   * @param {object} teamMember Selected team member from whom add or update a shift
   * @param {object} day Selected day of the week from which add or update a shift
   */
  const editShift = (startTime = '00:00', endTime = '00:00') => {
    if (startTime && endTime) {
      setCurrentShiftTimes({
        startTime,
        endTime,
      });
    }

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
      try {
        day.removeShift(teamMember);
      } catch (error) {
        console.error(error);
      }
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
