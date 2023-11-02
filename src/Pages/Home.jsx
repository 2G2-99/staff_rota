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

// * Testing classes and methods
const NextWeek = new Week(new Date(), 1);
const Monday = NextWeek.days[0];

const Me = new TeamMember(9, 1, 1999, 'Santiago', 'Gomez', 'sm');
const Aranza = new TeamMember(17, 7, 1978, 'AranZaZu', 'Rodriguez', 'gm');
const Anna = new TeamMember(23, 1, 2000, 'Anna', 'Dabby', 'crew');
const Greta = new TeamMember(10, 5, 1994, 'greTa', 'KosCardY', 'crew');
const Julian = new TeamMember(20, 1, 1999, 'juliAn', 'PEREZ', 'SM');
const Jacob = new TeamMember(10, 5, 2001, 'Jacob', 'WRIGHT', 'crew');

// me.setShift(Monday, '07:00', '16:00');
// Aranza.setShift(Monday, '07:00', '16:00');
// Anna.setShift(Monday, '07:00', '16:00');

Monday.addShift(Me, '07:00', '16:00');
Monday.addShift(Aranza, '07:00', '16:00');
Monday.addShift(Greta, '07:00', '16:00');
Monday.addShift(Anna, '16:00', '00:00');
Monday.addShift(Julian, '15:00', '00:00');
Monday.addShift(Jacob, '16:00', '00:00');

console.log(Monday.shifts);
console.log(Monday.calculateHoursOfDay());

NextWeek.days[1].addShift(Me, '07:00', '16:00');
NextWeek.days[1].addShift(Aranza, '07:00', '16:00');
NextWeek.days[1].addShift(Greta, '07:00', '16:00');
NextWeek.days[1].addShift(Anna, '16:00', '00:00');
NextWeek.days[1].addShift(Julian, '15:00', '00:00');
NextWeek.days[1].addShift(Jacob, '16:00', '00:00');

NextWeek.days[1].peopleOnShift();
console.log(NextWeek.days[1]);

NextWeek.days[1].removeShift(Me);

console.log(NextWeek.days[1].calculateHoursOfDay());
console.log(NextWeek.days[1].shifts);

NextWeek.days[1].peopleOnShift();
console.log(NextWeek.days[1]);
// * Testing classes and methods

export default Home;

// TODO: Implement a way to connect both TeamMember and Week classes.
