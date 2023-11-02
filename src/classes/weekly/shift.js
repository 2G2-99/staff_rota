const START_OPENING = '07:00';
const END_OPENING = '16:00';
const START_CLOSING = '15:00';

class Shift {
	constructor(date, startOn, end) {
		this.date = date;
		this.startOn = startOn;
		this.end = end;
		this.checkShift();
		this.type = this.typeOfShift();
		this.hours = this.calculateShiftHours();
	}

	/*
	 * Checks that startOn and end values are given to the constructor and that the end of the shift goes no further than '00:30'
	 */
	checkShift() {
		if (!this.startOn || !this.end) {
			throw new Error('A shift must include a starting and ending time');
		} else if (this.end < this.startOn && this.end > '00:30') {
			throw new Error(
				'You cannot set a shift where the starting time is ahead of the ending time'
			);
		}
	}

	/*
	 * Evaluates both startOn and end time to determine the type of shift
	 */
	typeOfShift() {
		return this.startOn >= START_CLOSING
			? 'closing'
			: this.startOn > START_OPENING && this.end > END_OPENING
			? 'split'
			: 'opening';
	}

	/*
	 * Calculates the difference between the startOn and end to return the total hours of the shift. First a Date object is created and then modified to add the hours and minutes of the shift
	 */
	calculateShiftHours() {
		const startDateObject = new Date(this.date);
		const endDateObject = new Date(this.date);

		const [startHours, startMinutes] = this.startOn.split(':').map(Number);
		const [endHours, endMinutes] = this.end.split(':').map(Number);

		startDateObject.setHours(startHours, startMinutes);
		endDateObject.setHours(endHours, endMinutes);

		if (endDateObject < startDateObject) {
			endDateObject.setDate(endDateObject.getDate() + 1);
		}

		/*
		 * calculates the difference between the end and start times in milliseconds, then converts it to hours by dividing by 1000 (to get seconds), then 60 (to get minutes), then 60 again (to get hours)
		 */
		return (endDateObject - startDateObject) / 1000 / 60 / 60;
	}
}

export default Shift;
