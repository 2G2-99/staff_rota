// import { Manager, TeamMember } from '../classes/team';
import { Day } from '../classes/week';
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

			{/* Testing classes and methods */}
			{/* <div>
				{me.capitalisedName()} - {me.sayAge()} Years old - Position:{' '}
				{me.position}
			</div>
			<div>
				{anna.capitalisedName()} - {anna.sayAge()} Years old - Position:{' '}
				{anna.position}
			</div>
			<div>
				{arancha.capitalisedName()} - {arancha.sayAge()} Years old - Position:{' '}
				{arancha.position}
			</div> */}
			{/* Testing classes and methods */}
		</div>
	);
}

//* Testing team member classes and methods

// * Testing team member classes and methods
// * Testing Week classes and methods
const Wednesday = new Day('25/10/23');
Wednesday.addShift('07:00', '16:00');
Wednesday.addShift('07:00', '16:00');
Wednesday.addShift('07:00', '16:00');
Wednesday.addShift('16:00', '00:00');
Wednesday.addShift('16:00', '00:00');
Wednesday.addShift('16:00', '00:00');

// console.log(Wednesday.getFormattedDate());
// console.log(Wednesday.peopleOnShift());

console.log('========================');
const Thursday = new Day('26.10.23');
Thursday.addShift('14:00', '23:00');
Thursday.addShift('07:00', '16:00');
Thursday.addShift('07:00', '16:00');
Thursday.addShift('07:00', '16:00');
Thursday.addShift('16:00', '00:00');
Thursday.addShift('16:00', '00:00');
Thursday.addShift('16:00', '00:00');

console.log(Thursday.shifts);
// console.log(Thursday.shifts[3]);
Thursday.removeShift(Thursday.shifts[3]);
Thursday.addShift('07:00', '16:00');

console.log(Thursday.getFormattedDate());
console.log(Thursday.shifts);
console.log(Thursday.peopleOnShift());
// * Testing Week classes and methods

export default Home;
