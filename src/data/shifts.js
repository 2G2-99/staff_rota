// shifts.js
import { TeamMember } from '../classes/team/teamMember';
import Week from '../classes/weekly/week';

const team = [
	new TeamMember(1, 1, 1990, 'John', 'Doe', 'crew'),
	new TeamMember(2, 2, 1991, 'Jane', 'Doe', 'qc'),
	// more team members...
];

const week = new Week();

// Add shifts for each team member on each day
for (const teamMember of team) {
	for (const day of week.days) {
		const startTime = '07:00';
		const endTime = '16:00';
		day.addShift(teamMember, startTime, endTime);
	}
}

export { team, week };
