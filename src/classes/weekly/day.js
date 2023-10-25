import { format, parse } from 'date-fns';
import Shift from './shift';

class Day {
	constructor(dateString, shifts = []) {
		this.date = this.formatDateString(dateString);
		this.shifts = shifts;
	}
	formatDateString(dateString) {
		const formattedDateString = dateString.replace(/[/./]/g, '/');
		return parse(formattedDateString, 'dd/MM/yy', new Date());
	}

	addShift(startOn, end, other) {
		this.shifts.push(new Shift(this.date, startOn, end, other));
	}

	removeShift(shift) {
		if (!(shift instanceof Shift)) {
			throw new Error('Invalid shift object');
		}

		const index = this.shifts.indexOf(shift);
		if (index === -1) {
			throw new Error('Shift not found');
		} else {
			this.shifts.splice(index, 1);
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
}

export default Day;
