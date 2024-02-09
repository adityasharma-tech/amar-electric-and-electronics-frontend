import { secondsToMinutesAndSeconds } from '@/lib/utils';
import { useState, useEffect } from 'react';

function OTPTimer({onClick}) {
  const initialTime = parseInt(localStorage.getItem('otpTimer')) || 180; // 3 minutes in seconds
  const [timer, setTimer] = useState(initialTime);

  // Function to start the timer
  function startTimer() {
    const timerValue = 180; // 3 minutes in seconds
    localStorage.setItem('otpTimer', timerValue.toString());
    setTimer(timerValue);
  }

  useEffect(() => {
    // Retrieve timer value from localStorage when the component mounts
    const storedTimer = localStorage.getItem('otpTimer');
    if (storedTimer) {
      setTimer(parseInt(storedTimer));
    }

    // Decrement the timer every second
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
 const  [minutes, seconds] = secondsToMinutesAndSeconds(timer)
  return (
    <>
      {timer > 0 ? (
        <span className="text-gray-400 font-medium flex" style={{
            fontSize: '10px'
          }}>Resend OTP in {minutes <=0 ? `${seconds} sec` : `${minutes} min ${seconds} sec` }</span>
      ) : (
        <button onClick={onClick} className="text-pink-600 font-medium flex" style={{
            fontSize: '15px'
          }}>Resend OTP</button>
      )}
    </>
  );
}

export default OTPTimer;
