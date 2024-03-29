import { addDays, addWeeks, endOfWeek, format, startOfWeek } from 'date-fns';
import Day from './day';

const DAYS_IN_WEEK = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

/**
 * @param weeksToAdvance is the given number of weeks to advance from the current date.
 */
class Week {
  constructor(weeksToAdvance = 0) {
    this.date = new Date();
    this.weekNumber = this.getWeekNumber();
    this.weeksToAdvance = weeksToAdvance;
    this.startOn = this.getAdvancedWeekStart();
    this.endOn = this.getAdvancedWeekEnd();
    this.days = this.addDaysToWeek();
  }

  getWeekNumber() {
    return format(this.date, 'w');
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
    const days = new Map();

    DAYS_IN_WEEK.forEach((dayName, i) => {
      const dayDate = addDays(this.startOn, i);
      const dateString = format(dayDate, 'dd/MM/yy');
      const day = new Day(dateString);

      days.set(dayName, day);
    });

    return days;
  }

  updateShift(dayIndex, teamMember, newShift) {
    const day = this.days[dayIndex];

    if (day) {
      day.updateShift(teamMember, newShift);
    } else {
      console.error(`Day at index ${dayIndex} not found`);
    }
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
