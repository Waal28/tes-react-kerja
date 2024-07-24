import { useEffect, useState } from 'react';

const WakeUpAlert = () => {
  const TIMEOUT = 3000; // 2 detik
  const [lastTime, setLastTime] = useState((new Date()).getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = (new Date()).getTime();
      if (currentTime > (lastTime + TIMEOUT + 2000)) {
        alert('Anda sudah bangun!');
      }
      setLastTime(currentTime);
    }, TIMEOUT);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [lastTime]);

  return <div>Monitoring laptop sleep/wake state...</div>;
};

export default WakeUpAlert;
