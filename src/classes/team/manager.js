import { TeamMember } from './teamMember';

class Manager extends TeamMember {
	constructor(day, month, year, firstName, lastName, position) {
		super(day, month, year, firstName, lastName, position);
		this.checkManager();
	}

	checkManager() {
		const isAManager =
			this.position === 'sm'
				? true
				: this.position === 'am'
				? true
				: this.position === 'gm';

		if (isAManager) {
			console.log('Welcome to the Team Member Modifier');
		} else {
			console.log(
				'You are not a Manager. You are not allowed to make any modifications'
			);
		}
	}
}

export default Manager;
