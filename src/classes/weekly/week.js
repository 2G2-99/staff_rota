import { addDays, addWeeks, format, startOfWeek } from 'date-fns';
import Day from './day';

const DAYS_IN_WEEK = 7;

/**
 * @param weeksToAdvance is the given number of weeks to advance from the current date.
 */
class Week {
	constructor(weeksToAdvance = 0) {
		this.date = new Date();
		this.weeksToAdvance = weeksToAdvance;
		this.startOn = this.getAdvancedWeekStart();
		this.days = this.addDaysToWeek();
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

	getFormattedStartOn() {
		return format(this.startOn, 'dd/MM/yyyy');
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
