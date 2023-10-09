import { differenceInYears } from 'date-fns/esm';

class Birthdate {
	constructor(day, month, year) {
		this.date = new Date(year, month - 1, day);
	}

	calculateAge() {
		const today = new Date();
		return differenceInYears(today, this.date);
	}
}

class TeamMember extends Birthdate {
	constructor(day, month, year, firstName, lastName) {
		super(day, month, year);
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayName(firstName, lastName) {
		console.log(`My name is ${firstName} ${lastName}`);
	}

	sayAge(age) {
		console.log(`I am ${age} years old`);
	}
}

class Position extends TeamMember {
	constructor(day, month, year, firstName, lastName, position) {
		super(day, month, year, firstName, lastName);
		this.position = position;
	}
}

export default Position;
