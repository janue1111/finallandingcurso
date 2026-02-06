import { trackAddPaymentInfo } from '../utils/tracking';

export function EyesLanding() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Johnson Box */}
                <div className="border-4 border-black p-6 mb-8">
                    <p className="text-xl font-bold text-black uppercase mb-3">
                        PARA MUJERES QUE SIENTEN QUE SU MIRADA LAS HACE PARECER 10 AÑOS MAYORES:
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        Según tus respuestas, el área de tus ojos es la que está reflejando mayor fatiga y pérdida de elasticidad. El problema no es tu falta de sueño, es la atrofia muscular. Aquí tienes el plan de acción exacto.
                    </p>
                </div>

                {/* Imagen #1 */}
                <div className="mb-8 rounded overflow-hidden">
                    <img
                        src="https://i.imgur.com/dVaLirT.png"
                        alt="Mujer señalando ojeras/bolsas con frustración frente al espejo"
                        className="w-full h-auto"
                    />
                </div>

                {/* Titular Magnético */}
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
                    Cómo Eliminar las Bolsas de los Ojos y Levantar Párpados Caídos en Solo 5 Días... Sin Inyecciones de Botox ni Cremas de $100
                </h1>

                {/* Sub-titular */}
                <h2 className="text-2xl text-black text-center mb-12 leading-relaxed">
                    Descubre el método de "Gimnasia Biológica" que reactiva los músculos orbitales para recuperar tu mirada de juventud, incluso si hoy tienes 39 y sientes que pareces de 45.
                </h2>

                {/* El Problema - Agitación */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-4">Es frustrante, ¿verdad?</h3>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Te miras al espejo por la mañana, has dormido 8 horas, pero esas bolsas siguen ahí. Aplicas correctores, usas el serum más caro de la farmacia y, aun así, la gente te pregunta: "¿Estás cansada?".
                    </p>
                    <p className="text-lg text-black mb-4 leading-relaxed font-semibold">
                        La realidad es cruda: Las cremas no pueden levantar un músculo que se ha rendido.
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        Si no haces nada hoy, la gravedad seguirá ganando. Los párpados seguirán cayendo hasta ocultar tus ojos y las bolsas se convertirán en surcos permanentes. No es cuestión de estética, es cuestión de recuperar el control de tu rostro antes de que la única opción sea el bisturí.
                    </p>
                </div>

                {/* Imagen #2 */}
                <div className="mb-12 rounded overflow-hidden">
                    <img
                        src="https://i.imgur.com/eBj5Ee3.png"
                        alt="Gráfico músculo orbital sano vs. débil/flácido"
                        className="w-full h-auto"
                    />
                </div>

                {/* La Solución */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        Te presento: El Protocolo "Mirada Radiante"
                    </h3>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        Un plan de entrenamiento intensivo de 5 días diseñado específicamente para fortalecer los 22 músculos pequeños que rodean tus ojos.
                    </p>
                    <p className="text-xl font-bold text-black mb-4">
                        Esto es lo que vas a lograr en solo 10 minutos al día:
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="text-lg text-black">
                            <strong>Día 1:</strong> Drenaje Inicial. Movimientos clave para expulsar el líquido retenido (adiós bolsas matutinas).
                        </li>
                        <li className="text-lg text-black">
                            <strong>Día 2:</strong> Activación del Párpado. Fortalecimiento del músculo elevador para "abrir" la mirada.
                        </li>
                        <li className="text-lg text-black">
                            <strong>Día 3:</strong> Borrador de "Patas de Gallo". Técnica de planchado manual para suavizar líneas de expresión.
                        </li>
                        <li className="text-lg text-black">
                            <strong>Día 4:</strong> Tonificación Orbital. Rellenado natural de la cuenca del ojo mediante volumen muscular.
                        </li>
                        <li className="text-lg text-black">
                            <strong>Día 5:</strong> Efecto Lift Permanente. La rutina de mantenimiento para que los resultados no desaparezcan.
                        </li>
                    </ul>
                </div>

                {/* Precio - Vendiendo Dinero con Descuento */}
                <div className="bg-gray-100 p-8 mb-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-black mb-4">
                        ¿Cuánto vale para ti dejar de esconderte tras unas gafas de sol?
                    </h3>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        Una sola sesión de radiofrecuencia o una ampolla de relleno te costaría más de $150. Hoy, puedes llevarte el protocolo completo, con videos paso a paso, por menos de lo que cuesta un café y un postre.
                    </p>
                    <p className="text-4xl font-bold text-black mb-2">
                        Acceso Inmediato por solo $10 USD
                    </p>
                    <p className="text-sm text-gray-700 mb-6">
                        (Un único pago. Sin suscripciones ocultas)
                    </p>

                    {/* Botón de Compra */}
                    <a
                        href="https://go.hotmart.com/H104278052V?ap=8b75"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAddPaymentInfo('Protocolo Mirada Radiante 5 Días', 10, 'mirada_radiante')}
                        className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase block text-center"
                    >
                        ¡SÍ! QUIERO MI PROTOCOLO DE 5 DÍAS AHORA
                    </a>
                </div>

                {/* Imagen #3 - Antes y Después */}
                <div className="mb-12 rounded overflow-hidden">
                    <img
                        src="https://i.imgur.com/f54mdRf.png"
                        alt="Fotos de Antes y Después"
                        className="w-full h-auto"
                    />
                </div>

                {/* Garantía */}
                <div className="border-4 border-black p-8 mb-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">
                        Garantía de "Cero Riesgo" de 7 Días:
                    </h3>
                    <p className="text-lg text-black leading-relaxed text-center">
                        Prueba los ejercicios hoy mismo. Si en una semana no notas que tus ojos se ven más abiertos y deshinchados, envíame un email y te devuelvo tus $10 de inmediato. Te quedas con el curso y con mi amistad. No tienes nada que perder y una mirada nueva que ganar.
                    </p>
                </div>

                {/* P.S. */}
                <div className="mb-8">
                    <p className="text-lg text-black leading-relaxed italic">
                        <strong>P.D.</strong> Sé que eres una mujer ocupada. Por eso este protocolo está diseñado para hacerse mientras te pones la crema hidratante o ves la televisión. No necesitas "más vida" para hacerlo, solo necesitas los 5 minutos correctos. Por $10, es el seguro de vida contra la mirada cansada.
                    </p>
                </div>
            </div>
        </div>
    );
}
