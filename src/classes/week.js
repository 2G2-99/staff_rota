import { format, parse } from 'date-fns';

class Shift {
	constructor(date, start, end, other = []) {
		this.date = date;
		this.start = start;
		this.end = end;
		this.other = other;
		this.checkShift();
		this.type = this.typeOfShift();
		this.hours = this.calculateHours();
	}

	checkShift() {
		if (!this.start || !this.end) {
			throw new Error('A shift must include a starting and ending time');
		}
		if (this.end < this.start && this.end !== '00:00' && this.end !== '00:30') {
			throw new Error(
				'You cannot set a shift where the starting time is ahead of the ending time'
			);
		}
	}

	typeOfShift() {
		if (this.start >= '15:00') {
			return 'closing';
		} else if (this.start >= '07:00' && this.end > '16:00') {
			return 'split';
		} else if (this.start >= '07:00') {
			return 'opening';
		}
	}

	calculateHours() {
		const start = new Date(this.date);
		const end = new Date(this.date);
		const [startHours, startMinutes] = this.start.split(':').map(Number);
		const [endHours, endMinutes] = this.end.split(':').map(Number);

		start.setHours(startHours, startMinutes);
		end.setHours(endHours, endMinutes);

		if (end < start) {
			end.setDate(end.getDate() + 1);
		}

		return (end - start) / 1000 / 60 / 60;
	}
}

class Day {
	constructor(dateString, shifts = []) {
		this.date = this.formatDateString(dateString);
		this.shifts = shifts;
	}
	formatDateString(dateString) {
		const formattedDateString = dateString.replace(/[/./]/g, '/');
		return parse(formattedDateString, 'dd/MM/yy', new Date());
	}

	addShift(start, end, other) {
		this.shifts.push(new Shift(this.date, start, end, other));
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

export { Shift, Day };
