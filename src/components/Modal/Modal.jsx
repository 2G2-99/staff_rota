import { useEffect } from 'react';
import { useRef } from 'react';
import Button from '../Button';
import CrossIcon from '../Icons/CrossIcon';

function Modal({ isOpen, hasCloseBtn, onClose, children }) {
	const modalRef = useRef(null);

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
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
		<dialog ref={modalRef} className='modal' onKeyDown={handleESCKey}>
			{hasCloseBtn && (
				<Button className='modal-close-btn' onClick={handleCloseModal}>
					{/* isOpen => cross if !isOpen => burger */}
					<CrossIcon width={'2em'} height={'2em'} />
				</Button>
			)}
			{children}
		</dialog>
	);
}

export default Modal;
