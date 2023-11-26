import Week from '../classes/weekly/week';
import TableRota from '../components/Rota/TableRota';

const CurrentWeek = new Week(new Date());

function Rota() {
	return (
		<>
			<h2
				data-rota-date={`${CurrentWeek.days[0].formattedDate}`}
				className='rota feature'
			>
				Week Rota {CurrentWeek.days[0].formattedDate}
			</h2>
			<TableRota selectedWeek={CurrentWeek} />
		</>
	);
}

export default Rota;

// TODO: Create another component that allows to edit the cell when "Edit" gets clicked

console.log(CurrentWeek.days);
