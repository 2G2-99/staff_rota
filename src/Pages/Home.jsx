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
currentWeek.days[0].addShift('07:00', '16:00');
currentWeek.days[0].addShift('15:00', '00:00');
currentWeek.days[0].addShift('15:00', '00:00');
currentWeek.days[0].addShift('15:00', '00:00');

console.log(currentWeek.days[0]);
currentWeek.days[0].calculateHoursOfDay();
console.log(currentWeek.days[0]);
console.log(currentWeek.days[0].removeShift(currentWeek.days[0].shifts[0]));
currentWeek.days[0].calculateHoursOfDay();
console.log(currentWeek.days[0]);
// * Testing Week classes and methods

export default Home;
