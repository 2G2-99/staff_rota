// import { Manager, TeamMember } from '../classes/team';
import { Day, Shift } from '../classes/week';
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
// const newShift = new Shift('07:00', '16:00');
// const newShift2 = new Shift('07:00', '4:00');
// newShift2.end = '14:00';
// const newShift3 = new Shift(undefined, '18:00');
// newShift3.start = '11:00';
// const newShift4 = new Shift('16:00', '00:00');
// const newShift5 = new Shift('18:00', '00:30');

// console.log(newShift);

// console.log(newShift.calculateHours());
// console.log(newShift2.calculateHours());
// console.log(newShift3.calculateHours());

// console.log(newShift.typeOfShift());
// console.log(newShift2.typeOfShift());
// console.log(newShift3.typeOfShift());
// console.log(newShift4.typeOfShift());

const day = new Day(new Date());
day.addShift('07:00', '14:00');
console.log(day);
// * Testing Week classes and methods

export default Home;
