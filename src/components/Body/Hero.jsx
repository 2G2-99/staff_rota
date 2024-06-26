import {
  currentShift,
  formattedDate,
  formattedQuarter,
  formattedWeek,
} from '../../logic/time';
import '../../styles/Hero.css';
import Button from '../Button';
import ScrollDownIcon from '../Icons/ScrollDownIcon';
import button from '../../styles/Button.module.css';
import Clock from '../Clock';

function Hero() {
  return (
    <div
      id='hero'
      className='full-width'
    >
      <div className='hero-wrapper'>
        <div className='hero date'>
          <p className='current'>{formattedDate}</p>
        </div>
        <Clock />
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
      <Button className={button.scroll}>
        {/* Scroll Down Icon */}
        <ScrollDownIcon />
      </Button>
      <p className='scroll-down_text'>scroll down</p>
    </div>
  );
}

export default Hero;
