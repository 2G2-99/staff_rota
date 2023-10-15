class Shift {
	constructor(start, end, off, other, blank) {
		this.start = start;
		this.end = end;
		this.off = off;
		this.other = other;
		this.blank = blank;
		this.checkShift();
	}
	checkShift() {
		if (this.start && this.end) {
			// TODO: Create the logic to determine the time of input (16 instead of 4 when is a closing)
			console.log(`${this.start} - ${this.end}`);
		} else if (!this.start || !this.end) {
			console.log('A shift must include an starting and ending time');
		}
	}
}

export { Shift };
