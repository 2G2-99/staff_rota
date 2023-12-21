import { addDays, addWeeks, format, startOfWeek } from 'date-fns';
import Day from './day';

const DAYS_IN_WEEK = 7;

class Week {
	constructor(date = new Date(), weeksToAdvance = 0) {
		this.date = date;
		this.weeksToAdvance = weeksToAdvance;
		this.startOn = this.getAdvancedWeekStart();
		this.days = this.addDaysToWeek();
		this.calculateHoursOfWeek();
	}

	getAdvancedWeekStart() {
		if (this.weeksToAdvance > 0) {
			return startOfWeek(addWeeks(this.date, this.weeksToAdvance), {
				weekStartsOn: 1,
			});
		} else {
			return startOfWeek(this.date, { weekStartsOn: 1 });
		}
	}

	addDaysToWeek() {
		const days = [];
		for (let i = 0; i < DAYS_IN_WEEK; i++) {
			const dayDate = addDays(this.startOn, i);
			const dateString = format(dayDate, 'dd/MM/yy');
			days.push(new Day(dateString));
		}
		return days;
	}

	calculateHoursOfWeek() {
		const totalHours = this.days
			.map(day => {
				day.calculateHoursOfDay();

				return day.hours;
			})
			.reduce((totalHours, hours) => totalHours + hours, 0);

		this.hours = totalHours;
	}
}

export default Week;
