import { differenceInYears } from 'date-fns/esm';
import Manager from './manager';

class TeamMember {
	constructor(day, month, year, firstName, lastName, position) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdate = new Date(year, month - 1, day);
		this.position = position;
		this.checkPosition();
		this.lowercaseValues();
	}

	lowercaseValues() {
		this.firstName = this.firstName.toLowerCase();
		this.lastName = this.lastName.toLowerCase();
		this.position = this.position.toLowerCase();
	}
	capitalisedName() {
		this.firstName =
			this.firstName.charAt(0).toUpperCase() +
			this.firstName.slice(1).toLowerCase();
		this.lastName =
			this.lastName.charAt(0).toUpperCase() +
			this.lastName.slice(1).toLowerCase();

		return this.lastName.concat(', ', this.firstName);
	}
	calculateAge() {
		const today = new Date();
		this.age = differenceInYears(today, this.birthdate);
	}
	sayAge() {
		this.calculateAge();
		return this.age;
	}
	sayPosition() {
		switch (this.position) {
			case 'crew':
				console.log(`I am a Crew`);
				break;
			case 'qc':
				console.log(`I am a QC`);
				break;
			case 'sm':
				console.log(`I am a Shift Manager`);
				break;
			case 'am':
				console.log(`I am a Assistant Manager`);
				break;
			case 'gm':
				console.log(`I am a General Manager`);
				break;

			default:
				break;
		}
	}
	checkPosition() {
		if (!this.position) {
			console.log('A position must be defined to add a new member to the team');
			this.position = 'undefined';
		} else if (this.position !== 'crew' && this.position !== 'qc') {
			this.constructor = Manager;
		}
	}
	setPosition(position) {
		this.position = position;
		this.checkPosition();
	}
}

export default TeamMember;
