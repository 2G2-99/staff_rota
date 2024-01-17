import { useState } from 'react';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ModalContext } from '../components/Modal/ModalContext';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import { ShiftsProvider } from '../contexts/ShiftsContext';

function Rota() {
	const [isEditModalOpen, setEditModalOpen] = useState(false);

	return (
		<ShiftsProvider>
			<ModalContext.Provider value={{ isEditModalOpen, setEditModalOpen }}>
				<TableRota />
				<EditShiftModal />
			</ModalContext.Provider>
		</ShiftsProvider>
	);
}

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted
