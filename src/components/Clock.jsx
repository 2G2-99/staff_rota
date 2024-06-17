import { useEffect, useRef } from 'react';
import { format } from 'date-fns';

function Clock() {
  const timeRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRef.current) {
        timeRef.current.innerText = format(new Date(), 'HH:mm');
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className='time'>
      <p
        className='current'
        ref={timeRef}
      />
    </div>
  );
}

export default Clock;
