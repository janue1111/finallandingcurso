import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/tracking';

export const PageTimer = () => {
    const location = useLocation();
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        let seconds = 0;
        let iteration = 0;

        // Limpiar intervalo anterior si existe (aunque el return lo maneja, doble seguridad)
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            seconds += 30;
            iteration += 1;

            pushToDataLayer('timer_engagement', {
                seconds_on_page: seconds,
                timer_iteration: iteration,
                virtual_page_path: location.pathname
            });

        }, 30000); // 30 segundos

        // Cleanup al desmontar o cambiar de ruta
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [location.pathname]); // Se reinicia cada vez que cambia el path

    return null; // Este componente no renderiza nada visual
};
