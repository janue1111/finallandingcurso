import { useEffect } from 'react';
import { trackLandingView, trackCTAClick } from '../utils/tracking';

export function EyesLanding() {
    // Track cuando se carga la landing
    useEffect(() => {
        trackLandingView('mirada_radiante', 10, 'eyes');
    }, []);

    const handleCTAClick = () => {
        trackCTAClick('mirada_radiante', 'main', 10);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* ... resto del código ... */}

            {/* EJEMPLO de cómo agregar el tracking al botón CTA: */}
            <a
                href="https://go.hotmart.com/H104278052V?ap=8b75"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}  {/* <-- AGREGAR ESTO */}
                className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase block text-center"
            >
                ¡SÍ! QUIERO MI PROTOCOLO DE 5 DÍAS AHORA
            </a>
        </div>
    );
}
