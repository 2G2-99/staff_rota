import { createContext, useState } from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  /**
   *
   * @param {object} teamMember Selected team member from whom add or update a shift
   * @param {object} day Selected day of the week from which add or update a shift
   */
  const editShift = (teamMember, day) => {
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
      value={{ isModalOpen, editShift, deleteShift, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
