import { Manager, TeamMember } from '../classes/team';
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
				{me.lastName}, {me.firstName} - {me.sayAge()} Years old - Position:{' '}
				{me.position}
			</div>
			<div>
				{anyCrew.lastName}, {anyCrew.firstName} - {anyCrew.sayAge()} Years old -
				Position: {anyCrew.position}
			</div>
			<div>
				{anyCrew2.lastName}, {anyCrew2.firstName} - {anyCrew2.sayAge()} Years
				old - Position: {anyCrew2.position}
			</div>
			{/*  */}
		</div>
	);
}

const me = new Manager(9, 1, 1999, 'Santiago', 'Gomez', 'sm');
const anyCrew = new TeamMember(26, 6, 2003, 'John', 'Doe');
anyCrew.setPosition('crew');
const anyCrew2 = new TeamMember(26, 6, 2003, 'John', 'Doe', 'gm');

export default Home;
