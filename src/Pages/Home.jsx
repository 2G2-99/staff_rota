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
// const me = new Manager(9, 1, 1999, 'Santiago', 'Gomez', 'sm');
// const anna = new TeamMember(26, 6, 2000, 'Anna', 'Dabbi');
// anna.setPosition('crew');
// const arancha = new TeamMember(17, 7, 1978, 'Aranzazu', 'Rodriguez', 'gm');
// * Testing team member classes and methods

// * Testing Week classes and methods
// TODO: FIND A WAY TO MAKE THE CLOSING SHIFTS WORK, INSTEAD OF HAVING THE MAS STARTING AT '00:30'
// console.log(newShift);

// console.log(newShift.calculateHours());
// console.log(newShift2.calculateHours());
// console.log(newShift3.calculateHours());

// console.log(newShift.typeOfShift());
// console.log(newShift2.typeOfShift());
// console.log(newShift3.typeOfShift());
// console.log(newShift4.typeOfShift());

const nextMonday = new Day('23/10/23');
nextMonday.addShift('07:00', '14:00');
nextMonday.addShift('09:00', '18:00');
nextMonday.addShift('11:00', '21:00');
nextMonday.addShift('16:00', '00:00');
nextMonday.addShift('18:00', '00:00');
nextMonday.addShift('07:00', '14:00');

// nextMonday.shifts.forEach(shift => {
// 	console.log(shift.checkShift());
// 	console.log(shift.calculateHours());
// 	console.log(shift.type);
// 	console.log('============================');
// });
// console.log(nextMonday.shifts);
// console.log(nextMonday.shifts[2].calculateHours());
// console.log(nextMonday.shifts[2].checkShift());
console.log(nextMonday.peopleOnShift());
// * Testing Week classes and methods

export default Home;
