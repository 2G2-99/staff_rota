import {
	differenceInHours,
	format,
	formatDistanceToNow,
	parse,
} from 'date-fns';

class Shift {
	constructor(date, start, end, other) {
		this.date = date;
		this.start = start;
		this.end = end;
		this.other = other;
		this.parsedTimes();
		this.checkShift();
	}

	parsedTimes() {
		const parsedStart = new Date(`${this.date.toDateString()} ${this.start}`);
		const parsedEnd = new Date(`${this.date.toDateString()} ${this.end}`);
		const formattedStart = format(parsedStart, 'HH:mm');
		const formattedEnd = format(parsedEnd, 'HH:mm');

		this.parsedStart = parsedStart;
		this.parsedEnd = parsedEnd;
		this.formattedStart = formattedStart;
		this.formattedEnd = formattedEnd;
	}

	checkShift() {
		if (this.start && this.end) {
			if (this.end < this.start) {
				return `You cannot set a shift to _____ where the starting time is ahead of the ending time`;
			}
			return `${this.start} - ${this.end}`;
		} else if (!this.start || !this.end) {
			return 'A shift must include an starting and ending time';
		}
	}

	calculateHours() {
		const start = parse(this.start, 'HH:mm', new Date());
		const end = parse(this.end, 'HH:mm', new Date());
		const hours = differenceInHours(end, start);
		return hours;
	}

	typeOfShift() {
		return this.start >= '7:00'
			? 'morning'
			: this.start >= '11:00' && (this.end <= '23:00' || this.end <= '23:30')
			? 'split'
			: this.end > '23:00' || this.end > '23:30'
			? 'closing'
			: undefined;
	}
}

class Day {
	constructor(date, shifts = []) {
		this.date = date;
		this.shifts = shifts;
	}

	addShift(start, end, other) {
		this.shifts.push(new Shift(this.date, start, end, other));
	}

	removeShift(shift) {
		const index = this.shifts.indexOf(shift);
		if (index !== -1) {
			this.shifts.splice(index, 1);
		}
	}

	peopleOnShift() {
		let morning = 0;
		let closing = 0;

		this.shifts.forEach(shift => {
			if (shift.start >= 7 && shift.start < 16) {
				morning++;
			} else {
				closing++;
			}
		});

		return { morning, closing };
	}

	getFormattedDate() {
		return format(this.date, 'yyyy-MM-dd');
	}

	getRelativeDate() {
		return formatDistanceToNow(this.date, { addSuffix: true });
	}
}

export { Shift, Day };
