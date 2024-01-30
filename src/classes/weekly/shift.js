const START_OPENING = '07:00';
const END_OPENING = '16:00';
const START_CLOSING = '15:00';

class Shift {
  constructor(date, startTime, endTime) {
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.checkShift();
    this.type = this.typeOfShift();
    this.hours = this.calculateShiftHours();
  }

  /*
   * Checks that startTime and endTime values are given to the constructor and that the endTime of the shift goes no further than '00:30'
   */
  checkShift() {
    if (!this.startTime || !this.endTime) {
      throw new Error('A shift must include a starting and ending time');
    } else if (this.endTime < this.startTime && this.endTime > '00:30') {
      throw new Error(
        'You cannot set a shift where the starting time is ahead of the ending time',
      );
    }
  }

  /*
   * Evaluates both startTime and endTime time to determine the type of shift
   */
  typeOfShift() {
    return this.startTime >= START_CLOSING
      ? 'closing'
      : this.startTime > START_OPENING && this.endTime > END_OPENING
      ? 'split'
      : 'opening';
  }

  /*
   * Calculates the difference between the startTime and endTime to return the total hours of the shift. First a Date object is created and then modified to add the hours and minutes of the shift
   */
  calculateShiftHours() {
    const startDateObject = new Date(this.date);
    const endDateObject = new Date(this.date);

    const [startHours, startMinutes] = this.startTime.split(':').map(Number);
    const [endHours, endMinutes] = this.endTime.split(':').map(Number);

    startDateObject.setHours(startHours, startMinutes);
    endDateObject.setHours(endHours, endMinutes);

    if (endDateObject < startDateObject) {
      endDateObject.setDate(endDateObject.getDate() + 1);
    }

    /*
     * calculates the difference between the endTime and start times in milliseconds, then converts it to hours by dividing by 1000 (to get seconds), then 60 (to get minutes), then 60 again (to get hours)
     */
    return (endDateObject - startDateObject) / 1000 / 60 / 60;
  }

  formatShift() {
    return `${this.startTime} - ${this.endTime}`;
  }
}

export default Shift;
