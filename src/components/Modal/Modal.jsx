import { useContext, useEffect } from 'react';
import { useRef } from 'react';
import Button from '../Button';
import CrossIcon from '../Icons/CrossIcon';

import modal from '../../styles/modal.module.css';
import button from '../../styles/Button.module.css';
import { ModalContext } from '../../context/ModalContext';

function Modal({ isOpen, hasCloseBtn, onClose, children }) {
  const modalRef = useRef(null);
  const { closeModal } = useContext(ModalContext);

  const handleCloseModal = () => {
    if (onClose) closeModal();
  };

  const handleESCKey = e => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen, modalRef]);

  return (
    <dialog ref={modalRef} className={modal.layout} onKeyDown={handleESCKey}>
      {hasCloseBtn && (
        <Button
          className={`${button.close} ${button.action}`}
          onClick={handleCloseModal}
        >
          {/* isOpen => cross if !isOpen => burger */}
          <CrossIcon width={'2em'} height={'2em'} />
        </Button>
      )}
      {children}
    </dialog>
  );
}

export default Modal;
