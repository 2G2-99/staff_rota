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

//* Testing team member classes and methods

// * Testing team member classes and methods
// * Testing Week classes and methods
const currentWeek = new Week(new Date());

currentWeek.days[0].addShift('07:00', '16:00');
currentWeek.days[0].addShift('07:00', '16:00');
currentWeek.days[0].addShift('07:00', '14:00');
currentWeek.days[0].addShift('15:00', '00:00');
currentWeek.days[0].addShift('16:00', '00:00');
currentWeek.days[0].addShift('16:00', '00:00');

currentWeek.days[1].addShift('07:00', '16:00');
currentWeek.days[1].addShift('07:00', '16:00');
currentWeek.days[1].addShift('07:00', '14:00');
currentWeek.days[1].addShift('15:00', '00:00');
currentWeek.days[1].addShift('16:00', '00:00');
currentWeek.days[1].addShift('16:00', '00:00');

currentWeek.days[2].addShift('07:00', '16:00');
currentWeek.days[2].addShift('07:00', '16:00');
currentWeek.days[2].addShift('07:00', '14:00');
currentWeek.days[2].addShift('15:00', '00:00');
currentWeek.days[2].addShift('16:00', '00:00');
currentWeek.days[2].addShift('16:00', '00:00');

currentWeek.days[3].addShift('07:00', '16:00');
currentWeek.days[3].addShift('07:00', '16:00');
currentWeek.days[3].addShift('07:00', '14:00');
currentWeek.days[3].addShift('14:00', '22:00');
currentWeek.days[3].addShift('15:00', '00:30');
currentWeek.days[3].addShift('16:00', '00:30');
currentWeek.days[3].addShift('18:00', '00:30');

currentWeek.days[4].addShift('07:00', '16:00');
currentWeek.days[4].addShift('07:00', '16:00');
currentWeek.days[4].addShift('07:00', '16:00');
currentWeek.days[4].addShift('12:00', '21:00');
currentWeek.days[4].addShift('12:00', '21:00');
currentWeek.days[4].addShift('15:00', '00:30');
currentWeek.days[4].addShift('16:00', '00:30');
currentWeek.days[4].addShift('16:00', '00:30');

currentWeek.days[5].addShift('07:00', '16:00');
currentWeek.days[5].addShift('07:00', '16:00');
currentWeek.days[5].addShift('07:00', '14:00');
currentWeek.days[5].addShift('12:00', '21:00');
currentWeek.days[5].addShift('12:00', '21:00');
currentWeek.days[5].addShift('15:00', '00:30');
currentWeek.days[5].addShift('16:00', '00:30');
currentWeek.days[5].addShift('16:00', '00:30');

currentWeek.days[6].addShift('07:00', '16:00');
currentWeek.days[6].addShift('07:00', '16:00');
currentWeek.days[6].addShift('07:00', '14:00');
currentWeek.days[6].addShift('12:00', '21:00');
currentWeek.days[6].addShift('15:00', '00:00');
currentWeek.days[6].addShift('16:00', '00:00');
currentWeek.days[6].addShift('16:00', '00:00');

// Hours used on Day [0]
currentWeek.days[0].calculateHoursOfDay();
console.log(currentWeek.days[0].hours);

// Hours used on the whole week
console.log(currentWeek.days);
currentWeek.calculateHoursOfWeek();
console.log(currentWeek.hours);
// * Testing Week classes and methods

export default Home;
