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
'''        CLICK AQUÍ PARA COMENZAR A VENDER NUESTROS PRODUCTOS <br /> DIGITALES Y GENERAR INGRESOS INMEDIATAMENTE...
'''      </a>
    </div>
  );
};

export default BottomBanner;
