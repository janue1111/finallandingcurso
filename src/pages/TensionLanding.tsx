import { trackAddPaymentInfo } from '../utils/tracking';

export function TensionLanding() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Diagnóstico personalizado */}
                <div className="bg-purple-50 border-4 border-purple-400 p-6 mb-8">
                    <p className="text-lg font-bold text-black text-center">
                        [ANÁLISIS FINALIZADO: Tu perfil de envejecimiento ha sido identificado como 'Tensión y Rigidez Mandibular' (Perfil Estructural). Lee tu diagnóstico a continuación.]
                    </p>
                </div>

                {/* Titular principal */}
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
                    Cómo liberar la "Máscara Invisible" de tensión que está ensanchando tu mandíbula y envejeciendo tus facciones.
                </h1>

                {/* Sub-titular */}
                <h2 className="text-2xl text-black text-center mb-12 leading-relaxed">
                    Elimina el bruxismo, recupera la simetría de tu rostro y suaviza las líneas de expresión provocadas por el estrés en solo 12 minutos al día. Sin protectores bucales incómodos, sin inyecciones de Botox y sin analgésicos.
                </h2>

                {/* De/Para */}
                <div className="mb-12 text-center">
                    <p className="text-lg text-black mb-2"><strong>De:</strong> Claudia Carreño</p>
                    <p className="text-lg text-black"><strong>Para:</strong> La mujer que siente su rostro rígido, cansado y "apretado".</p>
                </div>

                {/* El Problema - Empatía */}
                <div className="mb-12">
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        En tu diagnóstico hace un momento, marcaste una opción que la mayoría de los expertos en belleza ignoran: <strong>Sufres de tensión acumulada o bruxismo.</strong>
                    </p>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Quizás te despiertas con dolor en la mandíbula, o notas que, con el paso de los años, la parte baja de tu rostro se ha vuelto más ancha, "cuadrada" o pesada. Peor aún, te miras al espejo y sientes que un lado de tu cara está más caído que el otro, como si tus facciones estuvieran perdiendo su armonía natural.
                    </p>
                    <p className="text-xl font-bold text-black mb-4">Has intentado buscar soluciones, pero lo único que recibes es:</p>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-black">
                        <li>Protectores bucales (placas) que solo evitan que rompas tus dientes, pero no eliminan la tensión de tus músculos.</li>
                        <li>Sugerencias de Botox en el masetero que cuestan cientos de dólares y debilitan tu estructura ósea con el tiempo.</li>
                        <li>Masajes genéricos que no saben cómo tratar la fascia profunda del rostro.</li>
                    </ul>
                </div>

                {/* La Revelación */}
                <div className="bg-gray-100 p-8 mb-12 rounded-lg">
                    <h3 className="text-3xl font-bold text-black mb-4 text-center">
                        Lo que nadie te ha dicho es que tu rostro está atrapado en una "Guerra de Tensión":
                    </h3>
                    <p className="text-lg text-black leading-relaxed mb-4">
                        El <strong>músculo masetero</strong> es uno de los más fuertes del cuerpo humano. Cuando está constantemente contraído (por estrés o hábito), se hipertrofia. Esto no solo ensancha tu mandíbula dándote una apariencia más masculina y pesada, sino que tira de los otros músculos hacia abajo, creando asimetrías y surcos profundos que ninguna crema podrá rellenar.
                    </p>
                    <p className="text-2xl font-bold text-black text-center">
                        Tu problema no es la falta de colágeno. Es el exceso de tensión estructural.
                    </p>
                </div>

                {/* La Solución */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        La Solución: El Protocolo de Armonización y Liberación Facial
                    </h3>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        He desarrollado un método específico para mujeres con tu perfil, diseñado para "desbloquear" la musculatura facial y permitir que tu rostro recupere su forma suave, joven y simétrica.
                    </p>
                    <p className="text-xl font-bold text-black mb-4">
                        Con este entrenamiento de Yoga Facial enfocado en la relajación y estructura, lograrás:
                    </p>
                    <ul className="space-y-3 mb-8 text-lg text-black">
                        <li><strong>✓ Liberación del Masetero:</strong> Reduce el ancho de la mandíbula y suaviza las facciones "duras".</li>
                        <li><strong>✓ Corrección de Asimetrías:</strong> Técnicas manuales para equilibrar el tono muscular y levantar ese lado del rostro que sientes más caído.</li>
                        <li><strong>✓ Adiós al Bruxismo:</strong> Ejercicios de reeducación muscular para que tu rostro deje de "pelear" mientras duermes.</li>
                        <li><strong>✓ Suavizado de Arrugas por Estrés:</strong> Elimina las líneas del entrecejo y de la frente que no son por edad, sino por tensión constante.</li>
                    </ul>
                </div>

                {/* Contenido del Programa */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        Lo que vas a encontrar dentro del Sistema Completo:
                    </h3>
                    <ul className="space-y-4 text-lg text-black">
                        <li><strong>• La Rutina "Rostro en Calma":</strong> Movimientos de liberación miofascial para soltar los puntos de gatillo del dolor mandibular.</li>
                        <li><strong>• Módulo de Simetría Facial:</strong> Cómo identificar tus desequilibrios y trabajar más el lado débil para armonizar tus facciones.</li>
                        <li><strong>• Protocolo de Relajación Nocturna:</strong> 5 minutos antes de dormir para garantizar que tu rostro descanse tanto como tú.</li>
                        <li><strong>• Guía de Postura Craneal:</strong> La conexión olvidada entre tu cuello, tu espalda y por qué tu cara se está "cayendo" hacia adelante.</li>
                    </ul>
                </div>

                {/* Testimonio */}
                <div className="bg-gray-50 p-8 mb-8 rounded-lg border-2 border-gray-300">
                    <h4 className="text-xl font-bold text-black mb-4 text-center italic">
                        "Sentía que mi cara estaba siempre enojada, hasta que aprendí a soltar"
                    </h4>
                    <div className="mb-4 rounded overflow-hidden">
                        <img
                            src="https://i.imgur.com/f54mdRf.png"
                            alt="Fotos de Antes y Después"
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-lg text-black text-center italic">
                        "Tenía un lado más caído que el otro y el dolor de mandíbula no me dejaba vivir. Empecé por el bruxismo y terminé recuperando la forma de mi cara de hace 10 años. <strong>¡Gracias!</strong>"
                    </p>
                </div>

                {/* Oferta y Precio */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6 text-center">
                        Recupera tu armonía por una fracción del costo estético
                    </h3>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        Relajar tu rostro con inyecciones de toxinas cuesta <strong>$400 USD</strong> cada pocos meses.
                    </p>
                    <p className="text-lg text-black mb-6 leading-relaxed">
                        Una rinoplastia o cirugía de mentón para buscar simetría superan los <strong>$6,000 USD</strong>.
                    </p>
                    <p className="text-lg text-black mb-8 leading-relaxed">
                        Hoy, por haber completado tu diagnóstico de tensión, puedes tener la herramienta definitiva para ser tu propia terapeuta facial por un precio único.
                    </p>

                    <div className="bg-gray-100 p-8 rounded-lg text-center mb-8">
                        <p className="text-5xl font-bold text-black mb-4">
                            $150 USD
                        </p>
                        <p className="text-xl text-black mb-6">Inversión Única</p>

                        {/* Bonus */}
                        <div className="bg-purple-100 border-2 border-purple-400 p-6 mb-6 rounded">
                            <p className="text-xl font-bold text-black mb-3">BONUS EXCLUSIVO (Solo para este diagnóstico):</p>
                            <p className="text-lg text-black leading-relaxed">
                                <strong>Guía de Digitopuntura Facial:</strong> Puntos de presión exactos para aliviar el dolor de cabeza y la fatiga ocular en segundos.
                            </p>
                            <p className="text-sm text-black mt-2">(Valorado en $35 USD - <strong>¡GRATIS para ti!</strong>)</p>
                        </div>

                        {/* Botón Principal */}
                        <a
                            href="https://go.hotmart.com/H104278052V?ap=8b75"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackAddPaymentInfo('Programa Rostro sin Tensión', 150, 'rostro_sin_tension')}
                            className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase w-full mb-4 block text-center"
                        >
                            ¡SÍ! QUIERO LIBERAR MI ROSTRO AHORA
                        </a>
                        <p className="text-sm text-gray-600">(Acceso inmediato al portal de alumnos)</p>
                    </div>
                </div>

                {/* Garantía */}
                <div className="border-4 border-black p-8 mb-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">
                        Mi Garantía de "Rostro Relajado": Cero Riesgo
                    </h3>
                    <p className="text-lg text-black leading-relaxed text-center">
                        Si accedes hoy al programa y en los próximos <strong>7 días</strong> no sientes una liberación real en tu mandíbula, no ves tus facciones más suaves o simplemente no estás 100% satisfecha con la calidad de los videos, <strong>te devuelvo cada centavo</strong>. Sin preguntas, sin vueltas.
                    </p>
                    <p className="text-lg text-black leading-relaxed text-center mt-4">
                        Quiero que compres con la misma paz que tendrá tu rostro después de la primera rutina.
                    </p>
                </div>

                {/* Call to Action Final */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-black mb-6">
                        ¿Estás lista para soltar la tensión y volver a brillar?
                    </h3>
                    <p className="text-lg text-black mb-8 leading-relaxed">
                        No permitas que el estrés siga esculpiendo una cara que no te pertenece. Recupera la suavidad, la simetría y la juventud de tu gesto natural hoy mismo.
                    </p>
                    <a
                        href="https://go.hotmart.com/H104278052V?ap=8b75"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAddPaymentInfo('Programa Rostro sin Tensión', 150, 'rostro_sin_tension')}
                        className="bg-black text-white font-bold text-xl px-12 py-6 rounded hover:bg-gray-800 transition-colors uppercase inline-block"
                    >
                        ¡SÍ! QUIERO LIBERAR MI ROSTRO AHORA
                    </a>
                </div>

                {/* P.S. */}
                <div className="mb-8">
                    <p className="text-lg text-black leading-relaxed mb-4">
                        <strong>P.D.</strong> Las asimetrías faciales y la hipertrofia de mandíbula por tensión empeoran con cada mes que pasa sin tratamiento. Esta oferta de $150 es especial para tu diagnóstico de hoy. <strong>No dejes que la rigidez se convierta en arrugas permanentes.</strong>
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        <strong>P.D.2</strong> Si tienes una condición especial de mandíbula o dudas sobre el método, haz clic aquí abajo. Mi equipo y yo te responderemos por WhatsApp para asegurar que este camino es el correcto para ti.
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
                        <span>ASESORÍA PERSONALIZADA</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
