import Week from '../classes/weekly/week';
import TableRota from '../components/Rota/TableRota';
import '../styles/Rota.css';

const CurrentWeek = new Week(new Date());

function Rota() {
	return (
		<>
			<TableRota selectedWeek={CurrentWeek} />
		</>
	);
}

export default Rota;

// TODO: Create another component that allows to edit the cell when "Edit" gets clicked

console.log(CurrentWeek.days);
