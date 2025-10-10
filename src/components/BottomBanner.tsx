import React from 'react';
import './BottomBanner.css';

interface BottomBannerProps {
  isFixed: boolean;
}

const BottomBanner: React.FC<BottomBannerProps> = ({ isFixed }) => {
  const bannerClasses = `bottom-banner ${isFixed ? 'bottom-banner--fixed' : 'bottom-banner--static'}`;

  return (
    <div className={bannerClasses}>
      <a href="URL_DE_DESTINO" className="action-button">
'''        CLICK AQUI PARA DESCUBRIR EL MÉTODO JAPONÉS Y DESTRUIR MI PROCRASTINACIÓN YA
'''      </a>
    </div>
  );
};

export default BottomBanner;
