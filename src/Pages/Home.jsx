import { TeamMember } from '../classes/team/teamMember';
import Week from '../classes/weekly/week';
import {
	currentShift,
	formattedDate,
	formattedQuarter,
	formattedTime,
	formattedWeek,
} from '../logic/time';

function Home() {
	return (
		<div>
			<div>{formattedDate}</div>
			<div>
				Quarter {formattedQuarter} - Week {formattedWeek}
			</div>
			<div>{formattedTime}</div>
			<div>Current Shift: {currentShift}</div>
		</div>
	);
}

// * Testing Week classes and methods
const currentWeek = new Week(new Date());
const monday = currentWeek.days[0];
// * Testing Week classes and methods
//* Testing team member classes and methods
const me = new TeamMember(9, 1, 1999, 'Santiago', 'Gomez', 'sm');

console.log(me);
console.log(monday.shifts);
// * Testing team member classes and methods

export default Home;

// TODO: Implement a way to connect both TeamMember and Week classes.
