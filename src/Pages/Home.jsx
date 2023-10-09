import Position from '../classes/teamMember';
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

			{/* Testing team member classes and methods */}
			<div>
				{me.lastName}, {me.firstName} - {me.calculateAge()} - Position:{' '}
				{me.position}
			</div>
			{/*  */}
		</div>
	);
}

const me = new Position(9, 1, 1999, 'Santiago', 'Gomez', 'SM');

console.log(me);
console.log(me.calculateAge());

export default Home;
