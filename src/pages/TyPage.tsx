import { useEffect } from 'react';
import { trackPageView } from '../utils/tracking';

export const TyPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            trackPageView('/typage', 'Thank You Page');
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Gracias!
                </h1>
                <p className="text-gray-600 mb-6">
                    Hemos recibido la información correctamente.
                </p>
            </div>
        </div>
    );
};
