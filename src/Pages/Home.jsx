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
const Aranza = new TeamMember(17, 7, 1978, 'AranZaZu', 'Rodriguez', 'gm');
const Anna = new TeamMember(23, 1, 2000, 'Anna', 'Dabby', 'crew');

me.setShift(monday, '07:00', '16:00');
Aranza.setShift(monday, '07:00', '16:00');
Anna.setShift(monday, '07:00', '16:00');
console.log(monday.shifts);

monday.removeShift(Anna.firstName);
console.log(monday.shifts);
// * Testing team member classes and methods

export default Home;

// TODO: Implement a way to connect both TeamMember and Week classes.
