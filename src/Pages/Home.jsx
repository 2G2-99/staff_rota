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
				{anna.lastName}, {anna.firstName} - {anna.sayAge()} Years old -
				Position: {anna.position}
			</div>
			<div>
				{arancha.lastName}, {arancha.firstName} - {arancha.sayAge()} Years old -
				Position: {arancha.position}
			</div>
			{/*  */}
		</div>
	);
}

const me = new Manager(9, 1, 1999, 'Santiago', 'Gomez', 'sm');
const anna = new TeamMember(26, 6, 2000, 'Anna', 'Dabbi');
anna.setPosition('crew');
const arancha = new TeamMember(17, 7, 1978, 'Aranzazu', 'Rodriguez', 'gm');

console.log(me, anna, arancha);

export default Home;
