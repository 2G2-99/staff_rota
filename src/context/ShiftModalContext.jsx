import { createContext, useState } from 'react';

export const ShiftModalContext = createContext();

export function ShiftModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ teamMember: null, shift: null });

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);

  const updateModalData = (teamMember, shift) =>
    setModalData({ teamMember, shift });

  const editShift = (teamMember, shift) => {
    if (shift) {
      updateModalData(teamMember, shift);

      console.log(`Context Data: `);
      console.log(modalData.teamMember);
      console.log(modalData.shift.startTime);
      console.log(modalData.shift.endTime);
    } else {
      shift = null;
    }
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
        editShift,
      }}
    >
      {children}
    </ShiftModalContext.Provider>
  );
}
