import { format, parse } from 'date-fns';

class Day {
	constructor(dateString, shifts = new Map()) {
		this.date = this.formatDateString(dateString);
		this.shifts = shifts;
	}
	formatDateString(dateString) {
		const formattedDateString = dateString.replace(/[/./]/g, '/');
		return parse(formattedDateString, 'dd/MM/yy', new Date());
	}

	addShift(teamMember, shift) {
		const teamMemberName = teamMember.firstName;

		if (this.shifts.has(teamMemberName)) {
			throw new Error(
				`Team member ${teamMemberName} already has a shift on this day.`
			);
		} else {
			this.shifts.set(teamMemberName, shift);
		}
	}

	// ! Need to review its functionality and use within the class
	// modifyShift(teamMember, newShift) {
	// 	const teamMemberName = teamMember.firstName;

	// 	if (this.shifts.has(teamMemberName)) {
	// 		this.shifts.set(teamMemberName, newShift);
	// 	} else {
	// 		throw new Error(`${teamMemberName} does not have a shift on this day.`);
	// 	}
	// }

	removeShift(teamMemberName) {
		if (this.shifts.has(teamMemberName)) {
			this.shifts.delete(teamMemberName);
		}
	}

	peopleOnShift() {
		let morning = 0;
		let closing = 0;

		for (const shift of this.shifts) {
			if (shift.type === 'split') {
				morning++;
				closing++;
			} else if (shift.type === 'opening') {
				morning++;
			} else if (shift.type === 'closing') {
				closing++;
			}
		}

		return { morning, closing };
	}

	getFormattedDate() {
		return format(this.date, 'dd/MM/yyyy');
	}

	// ! Need to review the use of this method
	// getRelativeDate() {
	// 	return formatDistanceToNow(this.date, { addSuffix: true });
	// }

	calculateHoursOfDay() {
		const totalHours = this.shifts
			.map(shift => shift.hours)
			.reduce((totalHours, hours) => totalHours + hours, 0);

		this.hours = totalHours;
	}
}

export default Day;
