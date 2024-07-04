import { useContext, useEffect } from 'react';
import { useRef } from 'react';
import Button from '../Button';
import CrossIcon from '../Icons/CrossIcon';
import modal from '../../styles/Modal.module.css';
import button from '../../styles/Button.module.css';
import { ShiftModalContext } from '../../context/ShiftModalContext';

function Modal({ hasCloseBtn = false, children }) {
  const { isModalOpen, handleCloseModal } = useContext(ShiftModalContext);
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen, modalRef]);

  const handleESCKey = e => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} className={modal.layout} onKeyDown={handleESCKey}>
      {hasCloseBtn && (
        <Button
          className={`${button.close} ${button.action}`}
          onClick={handleCloseModal}
        >
          <CrossIcon width={'2em'} height={'2em'} />
        </Button>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
