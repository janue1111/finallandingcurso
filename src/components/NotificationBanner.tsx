import React, { useState, useEffect } from 'react';
import './NotificationBanner.css';

const NotificationBanner: React.FC = () => {
  const initialMinutes = 15;
  const initialTime = initialMinutes * 60;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="notification-banner">
      <p className="notification-text">
        🔥 Oferta de Lanzamiento: <span className="text-red">Accede</span> con un <span className="text-red">95% de descuento</span> solo por los próximos 15 minutos.{' '}
        <span className="font-bold text-red">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      </p>
    </div>
  );
};

export default NotificationBanner;