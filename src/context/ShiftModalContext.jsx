import { createContext, useState } from 'react';

export const ShiftModalContext = createContext();

export function ShiftModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(true);
  const [modalData, setModalData] = useState({ teamMember: null, shift: null });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <ShiftModalContext.Provider
      value={{
        isModalOpen,
        setModalOpen,
        modalData,
        setModalData,
        handleCloseModal,
      }}
    >
      {children}
    </ShiftModalContext.Provider>
  );
}
