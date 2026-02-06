import { trackAddPaymentInfo } from '../utils/tracking';

export function GravityLanding() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Diagnóstico personalizado */}
                <div className="bg-yellow-50 border-4 border-yellow-400 p-6 mb-8">
                    <p className="text-lg font-bold text-black text-center">
                        [ANÁLISIS FINALIZADO: Tu perfil de envejecimiento ha sido identificado como 'Efecto Gravedad' (Flacidez Nivel 2). Lee tu diagnóstico a continuación.]
                    </p>
                </div>

                {/* Titular principal */}
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
                    Cómo "Levantar" tus Mejillas y Borrar la Papada atacando la verdadera causa raíz que las cremas nunca podrán tocar.
                </h1>

                {/* Sub-titular */}
                <h2 className="text-2xl text-black text-center mb-12 leading-relaxed">
                    Recupera la firmeza de tu óvalo facial reactivando los 43 músculos de tu rostro en solo 15 minutos al día. Sin inyectarte toxinas, sin hilos tensores y sin gastar miles de dólares en cirugías que cambian tu expresión natural.
                </h2>

                {/* De/Para */}
                <div className="mb-12 text-center">
                    <p className="text-lg text-black mb-2"><strong>De:</strong> Claudia Carreño</p>
                    <p className="text-lg text-black"><strong>Para:</strong> La mujer que siente que su rostro ya no coincide con su energía.</p>
                </div>

                {/* El Problema - Empatía */}
                <div className="mb-12">
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Hace un momento, en el diagnóstico, confirmaste lo que muchas mujeres sienten pero pocas se atreven a decir: <strong>"Siento que mi cara se está cayendo"</strong>.
                    </p>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Ves cómo tus mejillas han perdido volumen, cómo la papada comienza a desdibujar tu mandíbula y cómo, a pesar de que te sientes joven por dentro, el espejo te devuelve una imagen que parece de 10 años más. Quizás tienes 39, pero sientes que pareces de 45.
                    </p>
                    <p className="text-xl font-bold text-black mb-4">Has intentado de todo:</p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-black">
                        <li>Cremas costosas y serums "milagrosos" que solo hidratan la superficie, pero no levantan nada.</li>
                        <li>Tratamientos estéticos que prometen mucho y solo vacían tu billetera.</li>
                        <li>Y quizás has considerado el Botox, pero te aterra la idea de inyectar toxinas derivadas de "carne podrida" en tu rostro o quedar con una expresión congelada y artificial.</li>
                    </ul>
                </div>

                {/* La Revelación */}
                <div className="bg-gray-100 p-8 mb-12 rounded-lg">
                    <h3 className="text-3xl font-bold text-black mb-4 text-center">
                        Tengo una noticia que los dermatólogos comerciales no quieren que sepas:
                    </h3>
                    <p className="text-2xl font-bold text-black text-center mb-4">
                        Tu piel no es el problema. El problema está debajo de ella.
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        Tu rostro tiene <strong>43 músculos</strong>. Con el tiempo, debido a la falta de uso correcto, estos músculos sufren de <strong>Atrofia Muscular</strong>. Se vuelven delgados, débiles y pierden su capacidad de sostener la piel. Es ahí cuando la gravedad gana y todo empieza a "derretirse".
                    </p>
                    <p className="text-lg text-black mt-4 leading-relaxed font-semibold">
                        Si no fortaleces la base (el músculo), no importa cuánta crema pongas encima; la estructura seguirá cayendo.
                    </p>
                </div>

                {/* La Solución */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        La Solución: El Método de Rejuvenecimiento Muscular Facial
                    </h3>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        He diseñado un sistema paso a paso que no solo estira la piel, sino que reentrena tus músculos para que vuelvan a su posición original. Es como ir al gimnasio, pero para tu cara.
                    </p>
                    <p className="text-xl font-bold text-black mb-4">
                        Al aplicar estas técnicas de Yoga Facial y Drenaje Linfático, lograrás:
                    </p>
                    <ul className="space-y-3 mb-8 text-lg text-black">
                        <li><strong>✓ Efecto Lifting Natural:</strong> Eleva tus pómulos de forma real y duradera.</li>
                        <li><strong>✓ Definición del Óvalo Facial:</strong> Elimina la flacidez de la papada y recupera la línea de tu mandíbula.</li>
                        <li><strong>✓ Suavizar Surcos:</strong> Rellena naturalmente los surcos nasogenianos al dar volumen al músculo de la mejilla.</li>
                        <li><strong>✓ Piel Radiante:</strong> Al masajear correctamente, activas la circulación y el colágeno natural, devolviendo el brillo que creías perdido.</li>
                    </ul>
                </div>

                {/* Contenido del Programa */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        Lo que vas a descubrir dentro del Programa Completo:
                    </h3>
                    <ul className="space-y-4 text-lg text-black">
                        <li><strong>• La Rutina "Adiós Gravedad":</strong> Ejercicios específicos para levantar los compartimentos grasos caídos.</li>
                        <li><strong>• Protocolo de Drenaje Linfático:</strong> Cómo eliminar la retención de líquidos que te hace ver hinchada y cansada.</li>
                        <li><strong>• Técnica de Relajación para el Bruxismo:</strong> Libera la tensión de la mandíbula que ensancha tu rostro y te causa dolor.</li>
                        <li><strong>• Guía de Aplicación Correcta:</strong> Aprenderás exactamente cuántos segundos por ejercicio y con qué aceites o cremas masajear para no estirar la piel de más.</li>
                    </ul>
                </div>

                {/* Testimonio */}
                <div className="bg-gray-50 p-8 mb-8 rounded-lg border-2 border-gray-300">
                    <h4 className="text-xl font-bold text-black mb-4 text-center italic">
                        "Dudaba de estos métodos hasta que lo vi en mi propio espejo"
                    </h4>
                    <div className="mb-4 rounded overflow-hidden">
                        <img
                            src="https://i.imgur.com/MuYUM0M.png"
                            alt="Fotos de Antes y Después"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-lg text-black text-center italic">
                        "Segura que no te pusiste Botox", me dijeron mis amigas. Mi respuesta fue simple: <strong>Jamás inyectaría veneno en mi cara teniendo este método natural.</strong>
                    </p>
                </div>

                {/* Oferta y Precio */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        Una oferta que no requiere cirugía (ni el costo de una)
                    </h3>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Una cirugía de estiramiento facial cuesta entre <strong>$5,000 y $10,000 USD</strong>, con riesgos de infección y meses de recuperación.
                    </p>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        Una sesión de Botox cuesta <strong>$300 USD</strong> y solo dura 4 meses.
                    </p>
                    <p className="text-lg text-black mb-8 leading-relaxed">
                        Hoy, por haber completado tu diagnóstico, puedes acceder al sistema completo de Yoga Facial por una fracción mínima de ese costo.
                    </p>

                    <div className="bg-gray-100 p-8 rounded-lg text-center mb-8">
                        <p className="text-5xl font-bold text-black mb-4">
                            $150 USD
                        </p>
                        <p className="text-xl text-black mb-6">Inversión Única</p>

                        {/* Bonus */}
                        <div className="bg-yellow-100 border-2 border-yellow-400 p-6 mb-6 rounded">
                            <p className="text-xl font-bold text-black mb-3">BONUS EXCLUSIVO (Si compras hoy):</p>
                            <p className="text-lg text-black leading-relaxed">
                                <strong>Guía Maestra de Aceites y Serums:</strong> Aprende cuál es el aceite ideal según tu tipo de piel (Seca, Grasa o Mixta) para potenciar los resultados del masaje.
                            </p>
                            <p className="text-sm text-black mt-2">(Valorado en $27 USD - <strong>¡GRATIS para ti!</strong>)</p>
                        </div>

                        {/* Botón Principal */}
                        <a
                            href="https://go.hotmart.com/H104278052V?ap=8b75"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackAddPaymentInfo('Programa Efecto Lifting', 150, 'efecto_lifting')}
                            className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase w-full mb-4 block text-center"
                        >
                            ¡SÍ! QUIERO MI RUTINA LIFTING AHORA
                        </a>
                        <p className="text-sm text-gray-600">(Pagos seguros vía Hotmart / Acceso inmediato)</p>
                    </div>
                </div>

                {/* Garantía */}
                <div className="border-4 border-black p-8 mb-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">
                        Garantía de Satisfacción Total: Riesgo CERO
                    </h3>
                    <p className="text-lg text-black leading-relaxed text-center">
                        Estoy tan seguro de la efectividad de mi método que te ofrezco una <strong>Garantía Blindada de 7 Días</strong>.
                    </p>
                    <p className="text-lg text-black leading-relaxed text-center mt-4">
                        Accede al curso, aplica las técnicas y mira los videos. Si en una semana no sientes tu piel más despierta, más firme y con más vida, o si simplemente decides que no es para ti, <strong>te devuelvo el 100% de tu dinero sin preguntas</strong>. El riesgo es todo mío.
                    </p>
                </div>

                {/* Call to Action Final */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6">
                        ¿Estás lista para detener la caída y recuperar tu rostro?
                    </h3>
                    <p className="text-lg text-black mb-8 leading-relaxed">
                        No dejes que pase otro año permitiendo que la gravedad gane la batalla. Tu rostro es tu carta de presentación y merece ser cuidado con amor y ciencia, no con químicos.
                    </p>
                    <a
                        href="https://go.hotmart.com/H104278052V?ap=8b75"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAddPaymentInfo('Programa Efecto Lifting', 150, 'efecto_lifting')}
                        className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase inline-block"
                    >
                        ¡SÍ! QUIERO MI RUTINA LIFTING AHORA
                    </a>
                </div>

                {/* P.S. */}
                <div className="mb-8">
                    <p className="text-lg text-black leading-relaxed mb-4">
                        <strong>P.D.</strong> Recuerda que este precio especial de $150 y el bono de aceites esenciales solo están disponibles para las personas que realizaron el diagnóstico hoy. Mañana el precio podría volver a su valor original. No esperes a que los surcos sean más profundos, el mejor momento para empezar fue hace 5 años; <strong>el segundo mejor momento es HOY</strong>.
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        <strong>P.D.2</strong> ¿Tienes dudas sobre si funcionará en tu piel? Haz clic en el botón de abajo y chatea directamente conmigo por WhatsApp para darte una asesoría rápida.
                    </p>
                </div>

                {/* Botón WhatsApp */}
                <div className="text-center">
                    <a
                        href="https://wa.me/51992748352"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white font-bold text-lg px-10 py-5 rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-3 mx-auto w-fit"
                    >
                        <span>📱</span>
                        <span>HABLAR CON UNA EXPERTA</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
