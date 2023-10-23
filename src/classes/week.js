import {
	differenceInHours,
	format,
	formatDistanceToNow,
	parse,
} from 'date-fns';

class Shift {
	constructor(date, start, end, other = undefined) {
		this.date = date;
		this.start = start;
		this.end = end;
		this.other = other;
		this.checkShift();
		this.typeOfShift();
	}

	checkShift() {
		if (this.start && this.end) {
			if (
				this.end < this.start &&
				this.end !== '00:00' &&
				this.end !== '00:30'
			) {
				return `You cannot set a shift where the starting time is ahead of the ending time`;
			}
			return `${this.start} - ${this.end}`;
		} else if (!this.start || !this.end) {
			return 'A shift must include a starting and ending time';
		}
	}

	typeOfShift() {
		if (this.start >= '15:00') {
			this.type = 'closing';
			return;
		} else if (this.start >= '07:00') {
			if (this.end >= '16:00') {
				this.type = 'split';
				return;
			}
			this.type = 'opening';
			return;
		}
	}

	calculateHours() {
		const dateStr = format(this.date, 'yyyy-MM-dd');
		const start = new Date(`${dateStr}T${this.start}`);
		const end = new Date(`${dateStr}T${this.end}`);
		const hours = differenceInHours(end, start);

		return hours;
	}
}

class Day {
	constructor(dateString, shifts = []) {
		this.date = parse(dateString, 'dd/MM/yy', new Date());
		this.shifts = shifts;
	}

	// TODO: ADD LOGIC TO HAVE A SINGLE SHIFT WHEN THE END TIME CROSSES MIDNIGHT
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
			if (shift.type === 'split') {
				return morning++, closing++;
			} else if (shift.type === 'opening') {
				return morning++;
			} else if (shift.type === 'closing') {
				return closing++;
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
