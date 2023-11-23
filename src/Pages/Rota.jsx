import Week from '../classes/weekly/week';
import TableRota from '../components/Rota/TableRota';

const CurrentWeek = new Week(new Date());

function Rota() {
	return (
		<>
			<h2 className={`rota ${CurrentWeek.days[0].formattedDate}`}>
				Week Rota {CurrentWeek.days[0].formattedDate}
			</h2>
			<TableRota selectedWeek={CurrentWeek} />
		</>
	);
}

export default Rota;

// TODO: Create another component that allows to edit the cell when "Edit" gets clicked

console.log(CurrentWeek.days);
