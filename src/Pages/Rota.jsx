import { useState } from 'react';
import Week from '../classes/weekly/week';
import EditShiftModal from '../components/Modal/EditShiftModal';
import { ModalContext } from '../components/Modal/ModalContext';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';
import team from '../data/team';

const CurrentWeek = new Week(new Date());

// *Add shifts for each team member on each day
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
			<ModalContext.Provider value={{ isEditModalOpen, setEditModalOpen }}>
				<TableRota selectedWeek={CurrentWeek} />
				<EditShiftModal />
			</ModalContext.Provider>
		</>
	);
}
// *The method need to be called upon initialisation to be able to have a first calculation
CurrentWeek.calculateHoursOfWeek();

export default Rota;

// TODO: Find a way to update total hours every time a shift is added, edited or deleted
