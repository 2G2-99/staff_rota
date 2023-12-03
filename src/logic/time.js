import { format } from 'date-fns';

const today = new Date();

const formattedYear = format(today, 'Y');
const formattedDate = format(today, 'E d ');
const formattedWeek = format(today, 'w');
const formattedQuarter = format(today, 'Q');
const formattedHour = format(today, 'HH');
const formattedMinute = format(today, 'mm');

const formattedTime = formattedHour.concat(':', formattedMinute);

const currentShift = formattedHour < '16' ? 'Opening' : 'Closing';

export {
	formattedDate,
	formattedYear,
	formattedQuarter,
	formattedWeek,
	formattedTime,
	currentShift,
};
