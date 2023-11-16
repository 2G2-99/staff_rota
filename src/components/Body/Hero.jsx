import {
	currentShift,
	formattedDate,
	formattedQuarter,
	formattedTime,
	formattedWeek,
} from '../../logic/time';
import '../../styles/Hero.css';

function Hero() {
	return (
		<div id="hero">
			<div className="hero-wrapper">
				<div className="date">
					<p className="current">{formattedDate}</p>
				</div>
				<div className="time">
					<p className="current">{formattedTime}</p>
				</div>
				<div className="date">
					<p className="format">
						Quarter <span className="quarter">{formattedQuarter}</span> - Week{' '}
						<span className="week">{formattedWeek}</span>
					</p>
				</div>
				<div className="shift-time">
					<p>
						Current Shift: <span className="current">{currentShift}</span>
					</p>
				</div>
			</div>
			<button className="scroll-down_btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="3em"
					height="3em"
					viewBox="0 0 24 24"
				>
					<path
						fill="#ffffff"
						d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"
					/>
				</svg>
			</button>
			<p className="scroll-down_text">scroll down</p>
		</div>
	);
}

export default Hero;
