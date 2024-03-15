import { createContext, useState } from 'react';

export const ShiftModalContext = createContext();

export function ShiftModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ teamMember: null, shift: null });

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);

  const updateModalData = (teamMember, shift) =>
    setModalData({ teamMember, shift });

  // Function to update the shift times in modalData
  const updateShift = newShiftTimes => {
    setModalData(previousModalData => ({
      ...previousModalData,
      shift: {
        ...previousModalData.shift,
        startTime: newShiftTimes.startTime,
        endTime: newShiftTimes.endTime,
      },
    }));
  };

  return (
    <ShiftModalContext.Provider
      value={{
        isModalOpen,
        setModalOpen,
        modalData,
        setModalData,
        handleOpenModal,
        handleCloseModal,
        updateModalData,
        updateShift,
      }}
    >
      {children}
    </ShiftModalContext.Provider>
  );
}
