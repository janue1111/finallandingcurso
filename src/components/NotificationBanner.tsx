import React from 'react';
import './NotificationBanner.css';

const NotificationBanner: React.FC = () => {
  return (
    <div className="notification-banner">
      <p className="notification-text">
        <span className="text-black">INSCRIPCIONES ABIERTAS HASTA HOY </span>
        <span className="text-red">Dom 28 septiembre a las 10:00 PM hora Colombia</span>
      </p>
    </div>
  );
};

export default NotificationBanner;