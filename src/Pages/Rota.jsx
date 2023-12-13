import { useState } from 'react';
import Week from '../classes/weekly/week';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ModalContext } from '../components/Modal/ModalContext';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';

const CurrentWeek = new Week(new Date());

// Add shifts for each team member on each day
for (const teamMember of team) {
	for (const day of CurrentWeek.days) {
		const startTime = '07:00';
		const endTime = '16:00';
		day.addShift(teamMember, startTime, endTime);
	}
}

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

// console.log(CurrentWeek.days);
// console.log(CurrentWeek.days[0].shifts.keys());
