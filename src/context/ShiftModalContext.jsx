import { createContext, useState } from 'react';

export const ShiftModalContext = createContext();

export function ShiftModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ teamMember: null, shift: null });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const updateModalData = (teamMember, shift) =>
    setModalData({ teamMember, shift });

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
      }}
    >
      {children}
    </ShiftModalContext.Provider>
  );
}
