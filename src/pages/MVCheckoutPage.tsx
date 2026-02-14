import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackPurchase, trackPageView } from '../utils/tracking';

export const MVCheckoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            trackPageView('/mvcheckout', 'Checkout - Yoga Facial');
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: '',
        fullName: '',
        phoneNumber: '',
        countryCode: '+57',
        coupon: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleContinue = async (e: FormEvent) => {
        e.preventDefault();

        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = 'Tu email es requerido.';
        }

        if (!formData.confirmEmail) {
            newErrors.confirmEmail = 'Confirma tu email es requerido.';
        } else if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = 'Los emails no coinciden.';
        }

        if (!formData.fullName) {
            newErrors.fullName = 'Nombre es requerido.';
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Teléfono es requerido.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        console.log('Intención de compra capturada (E5 Method):', formData);

        // Track purchase event
        trackPurchase(formData, 'Yoga Facial con Aromaterapia', 57);

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowMessage(true);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Procesando tu información...</p>
                </div>
            )}

            {/* Pop-up Modal de Mensaje */}
            {showMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            ¡Gracias por tu interés!
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Hemos recibido tu solicitud para el SISTEMA OJOS DE PRINCESA. Sin embargo, para garantizar que cada alumna reciba el acompañamiento y los resultados que prometemos, hemos limitado los cupos y <strong className="font-bold">acabamos de alcanzar el máximo semanal.</strong>
                        </p>
                        <p className="text-gray-600">
                            Agradecemos tu paciencia y tu confianza. Estamos trabajando para abrir nuevas plazas lo antes posible y que tú también puedas lucir un rostro radiante y rejuvenecido.
                        </p>
                        <button
                            onClick={() => navigate('/typage')}
                            className="mt-6 px-8 py-3 rounded-lg text-white font-bold transition shadow-lg"
                            style={{ backgroundColor: '#009D43' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#008038'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#009D43'}
                        >
                            Volver
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Producto Header */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0">
                            <img src="https://i.imgur.com/v7E8aFw.png" alt="Sistema Ojos de Princesa" className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-lg font-bold text-gray-900 mb-1">
                                Yoga Facial con Aromaterapia
                            </h1>
                            <p className="text-sm text-gray-600 mb-3">
                                Autor: MasterClasses La Seminarios.Online Mauricio Duque Zuluaga
                            </p>
                            <div className="text-2xl font-bold mb-1" style={{ color: '#355CC0' }}>
                                232.357,00 COP
                            </div>
                            <p className="text-sm" style={{ color: '#355CC0' }}>
                                o en 12 cuotas de 19.363,00 COP en la tarjeta de crédito
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formulario */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <form onSubmit={handleContinue} className="space-y-5">
                        {/* Tu email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Tu email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Informa tu email para recibir la compra"
                                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1 flex items-center">
                                    <span className="mr-1">⊗</span> {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Confirma tu email */}
                        <div>
                            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirma tu email
                            </label>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formData.confirmEmail}
                                onChange={handleChange}
                                required
                                placeholder="Introduce nuevamente tu email"
                                className={`w-full px-4 py-3 border ${errors.confirmEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.confirmEmail && (
                                <p className="text-red-600 text-sm mt-1 flex items-center">
                                    <span className="mr-1">⊗</span> {errors.confirmEmail}
                                </p>
                            )}
                        </div>

                        {/* Tu nombre completo */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Tu nombre completo
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="Introduce tu nombre completo"
                                className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.fullName && (
                                <p className="text-red-600 text-sm mt-1 flex items-center">
                                    <span className="mr-1">⊗</span> {errors.fullName}
                                </p>
                            )}
                        </div>

                        {/* Teléfono */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                Teléfono
                            </label>
                            <div className="flex gap-2">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="w-28 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                >
                                    <option value="+57">co +57</option>
                                    <option value="+51">pe +51</option>
                                    <option value="+1">us +1</option>
                                    <option value="+52">mx +52</option>
                                    <option value="+34">es +34</option>
                                </select>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    placeholder="321 1234567"
                                    className={`flex-1 px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                />
                            </div>
                            {errors.phoneNumber && (
                                <p className="text-red-600 text-sm mt-1 flex items-center">
                                    <span className="mr-1">⊗</span> {errors.phoneNumber}
                                </p>
                            )}
                        </div>

                        {/* Botón de continuar */}
                        <button
                            type="submit"
                            className="w-full text-white font-bold text-lg py-4 px-8 rounded-lg transition shadow-lg"
                            style={{ backgroundColor: '#009D43', fontFamily: "'Nunito Sans', sans-serif" }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#008038'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#009D43'}
                        >
                            Continuar
                        </button>
                    </form>

                    {/* Sección de Métodos de Pago - Siempre deshabilitada visualmente */}
                    <div id="payment-section" className="mt-8 pt-8 border-t border-gray-200 opacity-50 pointer-events-none">
                        {/* Tabs de métodos de pago */}
                        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
                            <button type="button" className="border-2 border-blue-500 bg-blue-50 rounded-lg p-2 md:p-3 text-center" disabled>
                                <div className="flex justify-center mb-1 md:mb-2">
                                    <img src="https://i.imgur.com/p5HlInC.png" alt="Tarjeta" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" />
                                </div>
                                <div className="text-xs font-medium text-gray-700">Débito /</div>
                                <div className="text-xs font-medium text-blue-600">Crédito</div>
                            </button>

                            <button type="button" className="border border-gray-300 rounded-lg p-2 md:p-3 text-center" disabled>
                                <div className="flex justify-center">
                                    <img src="https://i.imgur.com/LqE5EdX.png" alt="Efecty" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain" />
                                </div>
                            </button>

                            <button type="button" className="border border-gray-300 rounded-lg p-2 md:p-3 text-center" disabled>
                                <div className="flex justify-center">
                                    <img src="https://i.imgur.com/zdoG2wC.png" alt="Nequi" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain" />
                                </div>
                            </button>

                            <button type="button" className="border border-gray-300 rounded-lg p-2 md:p-3 text-center" disabled>
                                <div className="flex justify-center mb-1 md:mb-2">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" viewBox="0 0 32 32" fill="none">
                                        <circle cx="16" cy="16" r="14" stroke="#9CA3AF" strokeWidth="2" />
                                        <path d="M16 10V22M10 16H22" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="text-xs font-medium text-gray-700">Ver más</div>
                            </button>
                        </div>

                        {/* Formulario de Tarjeta */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Número de la tarjeta</label>
                                <input type="text" placeholder="0000 0000 0000 0000" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de vencimiento</label>
                                    <input type="text" placeholder="MM/AA" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        CVV
                                        <span className="ml-1 text-blue-500 cursor-help">ⓘ</span>
                                    </label>
                                    <input type="text" placeholder="Cód. de 3 o 4 dígitos" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del titular</label>
                                <input type="text" placeholder="Introduce el nombre impreso en la tarjeta" disabled className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed" />
                            </div>
                        </div>

                        {/* Opciones de pago en cuotas */}
                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase">Opciones de pago en cuotas</h3>
                            <div className="space-y-2">
                                <label className="flex items-center justify-between p-3 border rounded-lg bg-blue-50 border-blue-500">
                                    <div className="flex items-center">
                                        <input type="radio" name="installment" defaultChecked disabled className="mr-3" />
                                        <span className="text-sm font-medium text-gray-700">Pago en efectivo</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">232.357,00 COP</span>
                                </label>
                                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <input type="radio" name="installment" disabled className="mr-3" />
                                        <span className="text-sm font-medium text-gray-700">2 cuotas</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">116.178,00 COP / 2 meses</span>
                                </label>
                                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <input type="radio" name="installment" disabled className="mr-3" />
                                        <span className="text-sm font-medium text-gray-700">3 cuotas</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">77.452,00 COP / 3 meses</span>
                                </label>
                                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <input type="radio" name="installment" disabled className="mr-3" />
                                        <span className="text-sm font-medium text-gray-700">11 cuotas</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">21.123,00 COP / 11 meses</span>
                                </label>
                                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                                    <div className="flex items-center">
                                        <input type="radio" name="installment" disabled className="mr-3" />
                                        <span className="text-sm font-medium text-gray-700">12 cuotas</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">19.363,00 COP / 12 meses</span>
                                </label>
                            </div>
                            <button type="button" disabled className="w-full text-center text-gray-400 text-sm py-3">
                                Mostrar más opciones de pago
                            </button>
                        </div>

                        {/* Detalles de la compra */}
                        <div className="mt-6 py-4 border-t border-gray-200">
                            <h3 className="text-sm font-medium text-gray-600 mb-3">Detalles de la compra</h3>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-900">Yoga Facial con Aromaterapia</span>
                                <span className="text-sm font-bold text-gray-900">232.357,00 COP</span>
                            </div>
                        </div>

                        {/* Botón Comprar ahora */}
                        <button type="button" disabled className="w-full bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg mt-4">
                            Comprar ahora
                        </button>

                        {/* Protegido por Hotmart */}
                        <div className="text-center mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
                            <span>Protegido por</span>
                            <span className="font-bold">hotmart</span>
                        </div>

                        {/* Información de ayuda */}
                        <div className="mt-6 text-xs text-gray-600 space-y-2">
                            <p>admin@masterclasses.la</p>
                            <p><a href="#" className="text-blue-600 hover:underline">¿No puedes finalizar la compra? Visita nuestra Central de Ayuda</a></p>
                            <p>Si solicitas ayuda a nuestro Equipo de Soporte, <a href="#" className="text-blue-600 hover:underline">informa el siguiente código:</a></p>
                            <p className="font-mono text-gray-500">2026-02-13T17098872826-3623</p>
                            <p className="mt-4"><a href="#" className="text-blue-600 hover:underline">¿Se completó tu información automáticamente? Haz clic aquí para saber más.</a></p>
                            <p className="mt-4">
                                Al hacer clic en "Comprar ahora", declaro que (i) entiendo que Hotmart está procesando este pedido en nombre de <strong>MasterClasses.La Seminarios.Online Mauricio Duque Zuluaga</strong> y no tiene responsabilidad por el contenido y/o control sobre el; (ii) acepto los <a href="#" className="text-blue-600 hover:underline">Términos de Uso de Hotmart</a>, <a href="#" className="text-blue-600 hover:underline">Políticas de Privacidad</a> y <a href="#" className="text-blue-600 hover:underline">otras políticas de Hotmart</a>; (iii) soy mayor de edad o autorizado y acompañado por un tutor legal.
                            </p>
                            <p className="mt-4">Más información sobre tu compra <a href="#" className="text-blue-600 hover:underline">aquí</a>.</p>
                            <p className="mt-4 text-gray-500">
                                Hotmart © 2026 - Todos los derechos reservados<br />
                                2026-02-13T13T18:02:9342 <a href="#" className="text-blue-600 hover:underline">REF</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
