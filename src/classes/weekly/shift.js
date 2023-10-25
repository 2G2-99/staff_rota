class Shift {
	constructor(date, startOn, end, other = []) {
		this.date = date;
		this.startOn = startOn;
		this.end = end;
		this.other = other;
		this.checkShift();
		this.type = this.typeOfShift();
		this.hours = this.calculateHours();
	}

	checkShift() {
		if (!this.startOn || !this.end) {
			throw new Error('A shift must include a starting and ending time');
		}
		if (
			this.end < this.startOn &&
			this.end !== '00:00' &&
			this.end !== '00:30'
		) {
			throw new Error(
				'You cannot set a shift where the starting time is ahead of the ending time'
			);
		}
	}

	typeOfShift() {
		if (this.startOn >= '15:00') {
			return 'closing';
		} else if (this.startOn >= '07:00' && this.end > '16:00') {
			return 'split';
		} else if (this.startOn >= '07:00') {
			return 'opening';
		}
	}

	calculateHours() {
		const startOn = new Date(this.date);
		const end = new Date(this.date);
		const [startHours, startMinutes] = this.startOn.split(':').map(Number);
		const [endHours, endMinutes] = this.end.split(':').map(Number);

		startOn.setHours(startHours, startMinutes);
		end.setHours(endHours, endMinutes);

		if (end < startOn) {
			end.setDate(end.getDate() + 1);
		}

		return (end - startOn) / 1000 / 60 / 60;
	}
}

export default Shift;
