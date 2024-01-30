import { addDays, addWeeks, endOfWeek, format, startOfWeek } from 'date-fns';
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
    this.endOn = this.getAdvancedWeekEnd();
    this.days = this.addDaysToWeek();
  }

  getAdvancedWeekStart() {
    return this.weeksToAdvance > 0
      ? startOfWeek(addWeeks(this.date, this.weeksToAdvance), {
          weekStartsOn: 1,
        })
      : startOfWeek(this.date, { weekStartsOn: 1 });
  }

  getAdvancedWeekEnd() {
    this.endOn = endOfWeek(this.startOn, { weekStartsOn: 1 });
    return this.endOn;
  }

  getFormattedStartOn() {
    return format(this.startOn, 'dd/MM/yy');
  }

  getFormattedEndOn() {
    return format(this.endOn, 'dd/MM/yy');
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
