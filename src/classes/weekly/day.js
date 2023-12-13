import { format, parse } from 'date-fns';
import Shift from './shift';

class Day {
	constructor(dateString, shifts = new Map()) {
		this.date = this.formatDateString(dateString);
		this.formattedDate = this.getFormattedDate();
		this.dayName = this.getDayName();
		this.shifts = shifts;
	}

	formatDateString(dateString) {
		const formattedDateString = dateString.replace(/[/./]/g, '/');
		return parse(formattedDateString, 'dd/MM/yy', new Date());
	}

	addShift(teamMember, startTime, endTime) {
		const shift = new Shift(this.date, startTime, endTime);

		if (this.shifts.has(teamMember)) {
			throw new Error(
				`Team member ${teamMember} already has a shift on this day.`,
			);
		} else {
			this.shifts.set(teamMember, shift);
			console.log('Added shift for team member:', teamMember);
		}
	}

	modifyShift(teamMember, startTime, endTime) {
		const shift = new Shift(this.date, startTime, endTime);

		if (this.shifts.has(teamMember)) {
			this.shifts.set(teamMember, shift);
		} else {
			throw new Error(`${teamMember} does not have a shift on this day.`);
		}
	}

	removeShift(teamMember) {
		if (this.shifts.has(teamMember)) {
			this.shifts.delete(teamMember);
			console.log('Removed shift for team member:', teamMember);
		} else {
			throw new Error('Given team member does not exist');
		}
	}

	peopleOnShift() {
		let morning = 0;
		let closing = 0;

		for (const shift of this.shifts.values()) {
			if (shift.type === 'split') {
				morning++;
				closing++;
			} else if (shift.type === 'opening') {
				morning++;
			} else if (shift.type === 'closing') {
				closing++;
			}
		}

		// return { morning, closing };
		this.morning = morning;
		this.closing = closing;
	}

	getFormattedDate() {
		return format(this.date, 'dd/MM/yyyy');
	}

	getDayName() {
		return format(this.date, 'E');
	}

	calculateHoursOfDay() {
		const shiftsHours = [];
		for (const shift of this.shifts.values()) {
			shiftsHours.push(shift.hours);
		}

		return shiftsHours.reduce((totalHours, hours) => totalHours + hours, 0);
	}
}

export default Day;
