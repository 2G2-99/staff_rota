import { createContext, useState, useCallback } from 'react';
import Week from '../classes/weekly/week.js';
import team from '../data/team';

export const ShiftsContext = createContext();

export const ShiftsProvider = ({ children }) => {
	const CurrentWeek = new Week(new Date()); // Initialize the current week

	// ! TESTING
	// *Add shifts for each team member on each day
	for (const teamMember of team) {
		for (const day of CurrentWeek.days) {
			const startTime = '07:00';
			const endTime = '16:00';
			day.addShift(teamMember, startTime, endTime);
		}
	}
	// ! TESTING

	const [shifts, setShifts] = useState(CurrentWeek);
	const [totalHours, setTotalHours] = useState(
		CurrentWeek.calculateHoursOfWeek(),
	);

	const deleteShift = useCallback(
		(teamMember, dayInstance) => {
			// Create a new Week instance with updated days
			const updatedWeek = new Week(shifts.date, shifts.weeksToAdvance);
			// Find the day to delete the shift from
			const dayToDeleteShift = updatedWeek.days.find(
				day => day.formattedDate === dayInstance.formattedDate,
			);

			// Log the found day and its shifts for debugging
			console.log('Day to delete shift from:', dayToDeleteShift);
			console.log('Shifts for the day:', dayToDeleteShift?.shifts);

			// TODO: Need to findout why the Shifts are not being found
			// Logic to delete the shift
			if (dayToDeleteShift?.shifts.has(teamMember)) {
				try {
					dayToDeleteShift.removeShiftFrom(teamMember);

					// Update the shifts state
					setShifts(updatedWeek);
					// Update the total hours if necessary
					setTotalHours(shifts.calculateHoursOfWeek());
				} catch (error) {
					console.log(error);
				}
			} else {
				console.log('No shifts to remove for team member:', teamMember);
			}
		},
		[shifts],
	);

	// Add more functions for editing and adding shifts as needed

	return (
		<ShiftsContext.Provider value={{ shifts, totalHours, deleteShift }}>
			{children}
		</ShiftsContext.Provider>
	);
};
