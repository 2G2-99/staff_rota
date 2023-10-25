import { addWeeks, startOfWeek } from 'date-fns';

class Week {
	constructor(date = new Date(), weeksToAdvance = 0, days = []) {
		this.date = date;
		this.days = days;
		this.weeksToAdvance = weeksToAdvance;
		this.startOn = this.getStartOfWeek();
		this.advanceTo = this.addToWeek();
	}

	getStartOfWeek() {
		return startOfWeek(this.date, { weekStartsOn: 1 });
	}

	addToWeek() {
		return this.weeksToAdvance > 0
			? addWeeks(this.startOn, this.weeksToAdvance)
			: null;
	}
}

export default Week;
