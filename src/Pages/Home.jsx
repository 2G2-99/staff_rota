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
const oneWeekAhead = new Week(new Date(), 1);
const twoWeeksAhead = new Week(new Date(), 2);

console.log(currentWeek.startOn);
console.log(currentWeek.days);
console.log('==========================================');

console.log(oneWeekAhead.startOn);
console.log(oneWeekAhead.days);
console.log('==========================================');

console.log(twoWeeksAhead.startOn);
console.log(twoWeeksAhead.days);
console.log('==========================================');
// * Testing Week classes and methods

export default Home;
