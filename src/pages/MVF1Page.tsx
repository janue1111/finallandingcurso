import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackOptInSubmit, trackPageView } from '../utils/tracking';

export const MVF1Page = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Small delay to ensure GTM is ready and to distinguish from initial load if needed
        const timer = setTimeout(() => {
            trackPageView('/mvf1', 'EL Secreto Europeo - Optin');
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Tracking opt-in
        trackOptInSubmit(name, email, {
            landing_name: '/mvf1',
            oldUrl: window.location.href,
            newUrl: window.location.origin + '/mvof'
        });

        // TODO: Aquí puedes guardar los datos antes de redirigir
        console.log('Form submitted:', { name, email });

        // Simulación de envío y redirección
        setTimeout(() => {
            setIsSubmitting(false);
            // Redirigir a la página de oferta
            navigate('/mvof');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full">
                {/* Big Idea - Titular Principal */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        El Secreto Europeo de los "Ojos de Princesa": El hallazgo del "Metabolismo Secundario"
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Logra un contorno de ojos 50% más liso y firme activando tu 'Metabolismo Secundario' en sesiones de solo 5 minutos al día.
                    </p>
                </div>

                {/* Formulario de Opt-in */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Campo de Nombre */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="¿Cómo te llamas?"
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Campo de Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Botón CTA */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isSubmitting ? 'Enviando...' : 'Quiero ver el descubrimiento'}
                        </button>
                    </form>

                    {/* Bullets de los "SIN" - Eliminan miedos */}
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center text-gray-200">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Sin inyecciones de Botox.</span>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Sin cirugías riesgosas.</span>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Sin gastar en cremas que no funcionan.</span>
                        </div>
                    </div>

                    {/* Mensaje de privacidad */}
                    <p className="text-center text-sm text-gray-400 mt-6">
                        🔒 Tus datos están seguros. No compartimos tu información.
                    </p>
                </div>

                {/* Badge de confianza (opcional) */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        ✨ Únete a miles de personas que ya lo descubrieron
                    </p>
                </div>
            </div>
        </div>
    );
};
