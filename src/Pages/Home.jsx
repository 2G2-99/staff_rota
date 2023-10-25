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
// const weekStarting = startOfWeek(new Date(), { weekStartsOn: 1 });
// const weekStarting2 = startOfWeek(new Date(2023, 11, 1), { weekStartsOn: 1 });

// console.log(`${weekStarting} \n`, weekStarting2);

// const addToWeekStarting = addWeeks(weekStarting, 1);
// const addToWeekStarting2 = addWeeks(weekStarting2, 2);

// console.log(`${addToWeekStarting} \n`, addToWeekStarting2);

const currentWeek = new Week(new Date());
const oneWeekAhead = new Week(new Date(), 1);
const twoWeeksAhead = new Week(new Date(), 2);

console.log(currentWeek.advanceTo);
console.log(oneWeekAhead.advanceTo);
console.log(twoWeeksAhead.advanceTo);
// * Testing Week classes and methods

export default Home;
