import {
	currentShift,
	formattedDate,
	formattedQuarter,
	formattedTime,
	formattedWeek,
} from '../../logic/time';
import '../../styles/Hero.css';
import Button from '../Button';
import ScrollDownIcon from '../Icons/ScrollDownIcon';

function Hero() {
	return (
		<div id='hero'>
			<div className='hero-wrapper'>
				<div className='hero date'>
					<p className='current'>{formattedDate}</p>
				</div>
				<div className='time'>
					<p className='current'>{formattedTime}</p>
				</div>
				<div className='hero date'>
					<p className='format'>
						Quarter <span className='quarter'>{formattedQuarter}</span> - Week{' '}
						<span className='week'>{formattedWeek}</span>
					</p>
				</div>
				<div className='shift-time'>
					<p>
						Current Shift: <span className='current'>{currentShift}</span>
					</p>
				</div>
			</div>
			<Button className={'scroll-down_btn'}>
				{/* Scroll Down Icon */}
				<ScrollDownIcon />
			</Button>
			<p className='scroll-down_text'>scroll down</p>
		</div>
	);
}

export default Hero;
