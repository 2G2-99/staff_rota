import { useState } from 'react';
import Week from '../classes/weekly/week';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ModalContext } from '../components/Modal/ModalContext';
import TableRota from '../components/Rota/TableRota';

const CurrentWeek = new Week(new Date());

function Rota() {
	const [isEditModalOpen, setEditModalOpen] = useState(false);

	return (
		<>
			<h2
				data-rota-date={`${CurrentWeek.days[0].formattedDate}`}
				className='rota feature'
			>
				Week Rota {CurrentWeek.days[0].formattedDate}
			</h2>

			<ModalContext.Provider value={{ isEditModalOpen, setEditModalOpen }}>
				<TableRota selectedWeek={CurrentWeek} />
				<EditShiftModal />
			</ModalContext.Provider>
		</>
	);
}

export default Rota;

console.log(CurrentWeek.days);
