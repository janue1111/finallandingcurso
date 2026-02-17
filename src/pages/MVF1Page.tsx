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
        <div className="min-h-screen bg-[#6B0F1A]">

            {/* ============================================= */}
            {/* HEADER — Espacio para Logo / Imagen           */}
            {/* ============================================= */}
            <header className="bg-[#1a1a1a] border-b-[3px] border-[#CC0000] py-6 px-4">
                <div className="max-w-md mx-auto text-center">
                    <img
                        src="https://i.imgur.com/FU4QdKy.png"
                        alt="Logo"
                        className="w-full max-w-[280px] mx-auto h-auto"
                    />
                </div>
            </header>

            {/* ============================================= */}
            {/* BANNER ROJO — Big Idea / Headline             */}
            {/* ============================================= */}
            <section className="bg-[#CC0000] py-5 px-4">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-[22px] md:text-[28px] font-['Playfair_Display'] font-extrabold text-white leading-[1.2]">
                        El Secreto Europeo de los "Ojos de Princesa": El hallazgo del{' '}
                        <span className="underline decoration-[#FFD700] decoration-2 underline-offset-4">
                            "Metabolismo Secundario"
                        </span>
                    </h1>
                </div>
            </section>

            {/* ============================================= */}
            {/* SUBTÍTULO / PROMESA                           */}
            {/* ============================================= */}
            <section className="py-6 px-4">
                <div className="max-w-md mx-auto">
                    <div className="bg-[#4a0a12]/80 border-[4px] border-[#CC0000] rounded-lg py-5 px-5 text-center">
                        <p className="text-[16px] md:text-[18px] font-['Merriweather'] text-gray-200 leading-[1.6] italic">
                            Logra un contorno de ojos <strong className="text-white">50% más liso y firme</strong> activando tu 'Metabolismo Secundario' en sesiones de solo <strong className="text-white">5 minutos al día</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* ESPACIO PARA IMAGEN / VIDEO                   */}
            {/* ============================================= */}
            <section className="px-4 pb-6">
                <div className="max-w-md mx-auto">
                    <img
                        src="https://i.imgur.com/9Spji59.png"
                        alt="Descubrimiento Ojos de Princesa"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </section>

            {/* ============================================= */}
            {/* FORMULARIO DE OPT-IN — Estilo Dan Kennedy     */}
            {/* ============================================= */}
            <section className="px-4 pb-10">
                <div className="max-w-md mx-auto">

                    {/* Tarjeta del formulario */}
                    <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-[4px] border-[#CC0000] overflow-hidden">

                        {/* Header del formulario */}
                        <div className="bg-[#CC0000] py-4 px-5">
                            <h2 className="text-white text-center text-[17px] md:text-[19px] font-['Montserrat'] font-extrabold uppercase tracking-wide leading-tight">
                                🔓 Accede Al Descubrimiento Gratis
                            </h2>
                        </div>

                        {/* Cuerpo del formulario */}
                        <div className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Campo Nombre */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-[13px] font-['Montserrat'] font-bold text-[#333] uppercase tracking-wider mb-1.5"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="¿Cómo te llamas?"
                                        className="w-full px-4 py-3.5 bg-white border-2 border-[#D1D5DB] rounded text-[#111] text-[16px] font-['Montserrat'] placeholder-[#999] focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 transition-all"
                                    />
                                </div>

                                {/* Campo Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-[13px] font-['Montserrat'] font-bold text-[#333] uppercase tracking-wider mb-1.5"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="tu@email.com"
                                        className="w-full px-4 py-3.5 bg-white border-2 border-[#D1D5DB] rounded text-[#111] text-[16px] font-['Montserrat'] placeholder-[#999] focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/20 transition-all"
                                    />
                                </div>

                                {/* Botón CTA — Estilo Kennedy Verde 3D */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white font-['Montserrat'] font-extrabold text-[18px] md:text-[20px] py-4 px-6 rounded shadow-[0_6px_0_#1e8449] hover:shadow-[0_4px_0_#1e8449] active:shadow-[0_2px_0_#1e8449] active:translate-y-1 transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </span>
                                        ) : (
                                            '¡Quiero Ver El Descubrimiento!'
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Bullets de los "SIN" — Eliminan miedos */}
                            <div className="mt-6 space-y-2.5">
                                <div className="flex items-center">
                                    <span className="text-[#2ECC71] mr-2.5 text-lg font-bold">✓</span>
                                    <span className="text-[#444] text-[14px] font-['Montserrat'] font-medium">Sin inyecciones de Botox.</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#2ECC71] mr-2.5 text-lg font-bold">✓</span>
                                    <span className="text-[#444] text-[14px] font-['Montserrat'] font-medium">Sin cirugías riesgosas.</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[#2ECC71] mr-2.5 text-lg font-bold">✓</span>
                                    <span className="text-[#444] text-[14px] font-['Montserrat'] font-medium">Sin gastar en cremas que no funcionan.</span>
                                </div>
                            </div>

                            {/* Trust text — estilo Kennedy */}
                            <p className="text-center text-[12px] font-['Montserrat'] font-semibold text-[#CC0000] mt-5 tracking-wide">
                                🔒 Nunca Compartimos Tu Información Con Nadie
                            </p>
                        </div>
                    </div>

                    {/* Badge de confianza debajo del formulario */}
                    <div className="text-center mt-6">
                        <p className="text-gray-300 text-[13px] font-['Montserrat']">
                            ✨ Únete a miles de personas que ya lo descubrieron
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
