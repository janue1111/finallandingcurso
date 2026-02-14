import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { trackBeginCheckout, trackPageView } from '../utils/tracking';

export const MVOFPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            trackPageView('/mvof', 'Sistema Ojos de Princesa - VSL');
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="min-h-screen bg-white">
            {/* Contenedor principal - Carta de ventas */}
            <div className="max-w-3xl mx-auto px-6 py-12">

                {/* HEADER - Big Idea */}
                {/* HEADER - Big Idea */}
                <header className="text-center mb-6 bg-[#F9F7F2] p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-extrabold text-[#222222] mb-4 leading-[1.1]">
                        El Secreto Europeo de los "Ojos de Princesa": El hallazgo del <span className="text-[#8B0000]">"Metabolismo Secundario"</span>
                    </h1>

                    {/* Byline */}
                    <div className="flex flex-col items-center justify-center mt-6">
                        <p className="text-xs md:text-sm text-[#666666] uppercase tracking-wider font-semibold mb-4">
                            Por: Claudia Carreño | Lectura de 5 min
                        </p>
                        <hr className="w-full max-w-[200px] border-gray-300" />
                    </div>
                </header>

                {/* LEAD - Texto de Autoridad y Revelación */}
                <section className="mb-12 font-['Merriweather'] text-[#333333]">
                    <p className="text-lg leading-[1.6] mb-6">
                        Mientras la mayoría de las mujeres en este lado del mundo siguen atrapadas en un <strong>ciclo interminable de cremas costosas y citas para inyectarse toxinas</strong>, en los centros de estética avanzada de Europa se ha consolidado un <strong>hallazgo biológico que está cambiando las reglas del juego</strong> para siempre.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        Se trata de un descubrimiento que explica por qué, a pesar de dormir 8 horas o usar el serum más caro del mercado, muchas mujeres de entre 39 y 45 años se despiertan cada mañana sintiendo que su <strong>mirada luce cansada, con los párpados pesados y esas bolsas que parecen negarse a desaparecer</strong>.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        <span className="bg-[#FFFACD]">La realidad es que nos han vendido una idea incompleta.</span> La industria cosmética tradicional ha facturado billones de dólares basándose en una premisa falsa: que los problemas del contorno de ojos se solucionan desde la superficie. Sin embargo, la evidencia científica es devastadora: una crema, por muy lujosa que sea, <strong>carece de la potencia física para atravesar la barrera dérmica</strong> y mover el líquido estancado de una bolsa linfática. Tampoco tiene la capacidad de despertar un músculo ocular que ha perdido su memoria elástica y se ha atrofiado bajo el peso del estrés diario.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        Esta es la razón por la cual el 92% de las mujeres terminan decepcionadas, creyendo que su única opción es la toxicidad del Botox o los riesgos de una cirugía invasiva. Pero usted <strong>no ha fallado por falta de constancia o por genética</strong>; <span className="bg-[#FFFACD]">ha fallado porque el mecanismo que utilizaba era unidimensional.</span>
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        La verdadera solución para recuperar lo que los expertos ahora llaman unos "Ojos de Princesa" —una mirada firme, elevada y radiante— no se encuentra sobre la piel, sino en un proceso que ocurre "bajo la superficie". Un hallazgo que permite activar lo que los biólogos denominan el <strong>"Metabolismo Secundario" de las células faciales</strong>.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        Este procedimiento, que hasta hace poco se mantenía bajo reserva en protocolos exclusivos, ha sido finalmente bautizado como el <strong>Orden de Metabolismo Secundario Dermosensorial</strong>.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        A diferencia del yoga facial común, que a menudo se realiza sin una secuencia lógica y puede generar más tensión de la que elimina, este sistema utiliza una "llave" sensorial. Hablamos de un método que combina la bioquímica de metabolitos específicos con una secuencia exacta de activación muscular. El resultado es un proceso de autorreparación que le da a la piel la "orden" biológica de tensarse y drenar líquidos de forma inmediata, logrando <strong>párpados un 50% más lisos y firmes con sesiones de apenas 5 minutos</strong>.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        Lo más asombroso es que este procedimiento se realiza <span className="bg-[#FFFACD]">sin una sola inyección de Botox, sin riesgos quirúrgicos</span> y sin gastar una fortuna en productos que solo hidratan la superficie.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6">
                        En los próximos 3 minutos, voy a mostrarte la <strong>evidencia científica y los resultados reales</strong> detrás de esta potencia dermosensorial, y por qué este "secreto europeo" es la pieza que le faltaba a tu rutina para devolverle a tu mirada la juventud que creías perdida.
                    </p>
                </section>

                {/* IMAGEN DE AUTORIDAD (Post-Lead) */}
                <div className="mb-12 flex justify-center">
                    <img
                        src="https://i.imgur.com/8EfsYVe.png"
                        alt="Foto de Autoridad / Dra."
                        className="w-full max-w-2xl h-auto rounded shadow-sm border border-gray-200"
                    />
                </div>

                {/* BODY - Los 4 Bloques CPB (Creencia, Problema, Beneficio) */}
                <section className="mb-12 font-['Merriweather'] text-[#333333]">

                    {/* Bloque CPB 1 */}
                    <div className="mb-10 mt-[60px]">
                        <div className="text-center mb-[30px]">
                            <p className="font-['Roboto'] text-[13px] font-bold text-[#8B0000] tracking-[2px] uppercase mb-4">
                                HECHO CIENTÍFICO #1
                            </p>
                            <h2 className="text-2xl md:text-[26px] font-['Playfair_Display'] font-bold text-[#222222] leading-tight">
                                Las cremas para el contorno de ojos son físicamente incapaces de eliminar las bolsas y levantar el párpado.
                            </h2>
                        </div>

                        <div className="text-left font-['Merriweather'] text-[#333333]">
                            <p className="text-lg leading-[1.6] mb-4">
                                La barrera dérmica humana está diseñada para protegerte del exterior. <strong>Las moléculas de una crema común son demasiado grandes</strong> para atravesar la piel y llegar a los micro-músculos o al sistema linfático estancado.
                            </p>
                            <p className="text-lg leading-[1.6] mb-4">
                                Por eso, los dermatólogos más prestigiosos admiten que <span className="bg-[#FFFACD]">las cremas <strong>solo hidratan la capa superficial</strong>, dejando el problema real intacto bajo la superficie.</span>
                            </p>
                            <p className="text-lg leading-[1.6] mb-8">
                                Es simple: aplicar algo por fuera <strong>no puede mover un líquido que está atrapado por dentro</strong>.
                            </p>

                            {/* IMAGEN DEL PROBLEMA BIOLÓGICO (Hecho #1) */}
                            <div className="my-[30px] flex justify-center">
                                <img
                                    src="https://i.imgur.com/64VWPWy.png"
                                    alt="Diagrama comparativo: Molécula de Crema vs. Poro de la Piel"
                                    className="w-full max-w-lg h-auto rounded shadow-sm border border-gray-200"
                                />
                            </div>

                            <div className="bg-[#F5F5F5] border-l-4 border-[#8B0000] p-6 italic mb-4">
                                <p className="text-lg leading-[1.6]">
                                    Esto significa que si quieres dejar de tirar tu dinero, necesitas un método que 'abra la puerta' desde adentro y reactive tu sistema de drenaje natural.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Bloque CPB 2 */}
                    <div className="mb-10 mt-[60px]">
                        <div className="text-center mb-[30px]">
                            <p className="font-['Roboto'] text-[13px] font-bold text-[#8B0000] tracking-[2px] uppercase mb-4">
                                HECHO CIENTÍFICO #2
                            </p>
                            <h2 className="text-2xl md:text-[26px] font-['Playfair_Display'] font-bold text-[#222222] leading-tight">
                                Es un hecho científico validado en los centros de estética más exclusivos de Europa: los metabolismos secundarios aplicados con un orden preciso activan el único interruptor biológico capaz de reactivar el drenaje linfático y la firmeza del párpado cuando todo lo demás ha fallado.
                            </h2>
                        </div>

                        <div className="text-left font-['Merriweather'] text-[#333333]">
                            <p className="text-lg leading-[1.6] mb-8">
                                Esto ocurre porque, en el preciso momento en que estos compuestos botánicos tocan la superficie de tu rostro, <strong>se produce una fusión molecular</strong> que permite que el yoga facial empiece a trabajar sobre el músculo real y no solo sobre la piel superficial. Verás, <span className="bg-[#FFFACD]">este es el estándar actual que los grandes laboratorios han intentado mantener "bajo la mesa"</span>, y es la razón exacta por la que las mujeres en Europa lucen párpados firmes sin cirugía. En pocas palabras: sin esta "llave" química, los <strong>músculos de tus ojos permanecen dormidos</strong> por mucho ejercicio que intentes hacer.
                            </p>

                            {/* IMAGEN DEL MECANISMO ÚNICO (Hecho #2) */}
                            <div className="my-[30px] flex justify-center">
                                <img
                                    src="https://i.imgur.com/oFFajEP.png"
                                    alt="Esquema del 'Interruptor Biológico' activando el músculo ocular"
                                    className="w-full max-w-lg h-auto rounded shadow-sm border border-gray-200"
                                />
                            </div>

                            <div className="bg-[#F5F5F5] border-l-4 border-[#8B0000] p-6 italic mb-4">
                                <p className="text-lg leading-[1.6]">
                                    Al comprender este funcionamiento, seguramente ya empiezas a darte cuenta de que recuperar esos "Ojos de Princesa" es ahora una realidad inevitable; logrando una <strong>mirada un 50% más lisa y firme con sesiones de apenas 5 minutos al día</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bloque CPB 3 */}
                    <div className="mb-10 mt-[60px]">
                        <div className="text-center mb-[30px]">
                            <p className="font-['Roboto'] text-[13px] font-bold text-[#8B0000] tracking-[2px] uppercase mb-4">
                                HECHO CIENTÍFICO #3
                            </p>
                            <h2 className="text-2xl md:text-[26px] font-['Playfair_Display'] font-bold text-[#222222] leading-tight">
                                Es una realidad innegable en la fisiología moderna que la eficacia de un tratamiento no depende de cuánto tiempo le dediques, sino de la precisión biológica del estímulo que recibe el músculo.
                            </h2>
                        </div>

                        <div className="text-left font-['Merriweather'] text-[#333333]">
                            <p className="text-lg leading-[1.6] mb-4">
                                Al <strong>sincronizar la absorción del aceite</strong> con la <strong>tensión isométrica</strong> del yoga, se crea una respuesta de adaptación celular ultra-rápida. No necesitas horas de ejercicio porque estamos trabajando con la '<strong>memoria celular</strong>' del párpado; <span className="bg-[#FFFACD]">un estímulo de alta intensidad de 5 minutos es suficiente para activar el drenaje y la regeneración</span> sin agotar el tejido.
                            </p>
                            <p className="text-lg leading-[1.6] mb-4">
                                Este enfoque de 'Micro-Activación' es el estándar que siguen las mujeres con agendas más exigentes en las capitales europeas del diseño, donde el tiempo es el lujo más caro y los resultados deben ser inmediatos.
                            </p>
                            <p className="text-lg leading-[1.6] mb-8">
                                El proceso es matemático: una sola secuencia, una vez al día, durante <strong>exactamente 300 segundos</strong>. Sin margen de error y sin rutinas eternas que terminas abandonando por cansancio.
                            </p>

                            <div className="bg-[#F5F5F5] border-l-4 border-[#8B0000] p-6 italic mb-4">
                                <p className="text-lg leading-[1.6]">
                                    Y mientras consideras lo sencillo que es integrar este hábito en tu mañana, probablemente empiezas a sentir el alivio de saber que <strong>ya no tienes que elegir entre tu tiempo y tu belleza. Ahora puedes tener ambas</strong>, recuperando esa firmeza en tu mirada mientras te preparas para empezar el día.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bloque CPB 4 */}
                    <div className="mb-10 mt-[60px]">
                        <div className="text-center mb-[30px]">
                            <p className="font-['Roboto'] text-[13px] font-bold text-[#8B0000] tracking-[2px] uppercase mb-4">
                                HECHO CIENTÍFICO #4
                            </p>
                            <h2 className="text-2xl md:text-[26px] font-['Playfair_Display'] font-bold text-[#222222] leading-tight">
                                Es un hecho biológico y financiero innegable: la verdadera libertad estética no se compra cada seis meses en una clínica bajo una aguja, sino que se construye activando la propia capacidad regenerativa que tu cuerpo ya posee.
                            </h2>
                        </div>

                        <div className="text-left font-['Merriweather'] text-[#333333]">
                            <p className="text-lg leading-[1.6] mb-4">
                                El <strong>Botox funciona mediante parálisis</strong>; al desconectar el nervio del músculo, este último comienza un proceso de atrofia por desuso, lo que a largo plazo <strong>debilita aún más la estructura del párpado</strong> y te obliga a inyectarte dosis mayores. En cambio, <span className="bg-[#FFFACD]">el Metabolismo Secundario fortalece la fibra muscular y el tejido conectivo, lo que significa que los resultados son acumulativos</span>: mientras más lo usas, más joven luce tu mirada, sin crear dependencia.
                            </p>

                            {/* IMAGEN DE CONTRASTE (Hecho #4) */}
                            <div className="my-[30px] flex justify-center">
                                <img
                                    src="https://i.imgur.com/aRj8VPS.png"
                                    alt="Gráfica de Contraste: Atrofia por Botox vs. Regeneración por Bio-activación"
                                    className="w-full max-w-lg h-auto rounded shadow-sm border border-gray-200"
                                />
                            </div>
                            <p className="text-lg leading-[1.6] mb-4">
                                Esta es la razón por la que las esferas de alto nivel en el bienestar europeo están migrando masivamente de los rellenos sintéticos a la 'Bio-activación'. Hoy en día, lucir un rostro "congelado" es señal de un método anticuado; la mirada firme pero natural es el nuevo símbolo de estatus y salud.
                            </p>
                            <p className="text-lg leading-[1.6] mb-8">
                                La matemática es simple: una inversión única en aprender esta secuencia equivale a <strong>ahorrar más de $12,000 dólares</strong> en inyecciones y retoques durante la próxima década. Es la diferencia entre <strong>alquilar tu belleza o ser la dueña de ella</strong>.
                            </p>

                            <div className="bg-[#F5F5F5] border-l-4 border-[#8B0000] p-6 italic mb-4">
                                <p className="text-lg leading-[1.6]">
                                    Y mientras haces estas cuentas en tu cabeza, probablemente empiezas a darte cuenta de que este es el ahorro más inteligente que has hecho por tu rostro en años. Ahora puedes caminar con la seguridad de saber que tu mirada está rejuveneciendo de forma real, sin riesgos quirúrgicos y con la tranquilidad de que <strong>no volverás a ser esclava de una jeringa cada seis meses</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CIERRE - Transición */}
                {/* CIERRE - Transición */}
                <section className="mb-12 border-y border-gray-200 py-12 bg-[#F0F4F8] px-6 md:px-12 font-['Merriweather'] text-[#333333]">
                    <p className="text-lg leading-[1.6] mb-6 text-left">
                        Ahora que conoces el secreto del Orden de Metabolismo Secundario Dermosensorial, <strong>te queda una decisión clara por tomar</strong>. Puedes pasar de largo y seguir gastando en cremas inútiles, o puedes <span className="bg-[#FFFACD]">cruzar el puente y elegir el camino de los 'Ojos de Princesa'</span>.
                    </p>
                    <p className="text-lg leading-[1.6] mb-6 text-left">
                        Para hacértelo fácil, he empaquetado todo este protocolo en un sistema paso a paso que he diseñado exclusivamente para mujeres que no tienen tiempo que perder.
                    </p>
                    <p className="text-lg leading-[1.6] mb-8 text-left">
                        Al entrar hoy al programa de
                        <br />
                        <span className="font-['Montserrat'] font-bold text-[22px] text-[#000080] block my-4">
                            Yoga Facial con Aromaterapia
                        </span>
                        no solo obtienes la secuencia exacta para elevar tus párpados... sino que, para asegurar que tus resultados sean permanentes, he incluido estos aceleradores:
                    </p>
                </section>

                {/* OFERTA S.I.N. - Value Stack Kennedy Style */}
                <section className="mb-12 bg-white shadow-2xl border-[4px] border-[#CC0000] p-8 md:p-12 relative overflow-hidden">

                    {/* Encabezado Confirmación Kennedy */}
                    <div className="mb-6">
                        <h3 className="text-[22px] font-['Playfair_Display'] font-bold text-[#222222] text-left leading-tight">
                            SÍ, Claudia Carreño! Por favor, dame acceso inmediato a:
                        </h3>
                    </div>

                    {/* Título de la Oferta */}
                    <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#000080] text-center mb-10 uppercase tracking-wide leading-tight">
                        SISTEMA OJOS DE PRINCESA
                    </h2>

                    {/* VALUE STACK LIST */}
                    <div className="space-y-4 mb-10">
                        {/* Item 1: Protocolo Principal */}
                        <div className="flex items-baseline text-lg md:text-xl">
                            <span className="text-[#009D43] text-2xl mr-3 font-bold">✓</span>
                            <div className="flex-1 border-b-2 border-dotted border-gray-400 pb-1 flex justify-between items-baseline gap-2">
                                <span className="font-bold text-[#222222]">El Protocolo Maestro de Yoga Facial</span>
                                <span className="font-bold text-[#CC0000] whitespace-nowrap">(Valor $197)</span>
                            </div>
                        </div>

                        {/* Item 2: Bono 1 */}
                        <div className="flex items-baseline text-lg md:text-xl">
                            <span className="text-[#009D43] text-2xl mr-3 font-bold">✓</span>
                            <div className="flex-1 border-b-2 border-dotted border-gray-400 pb-1 flex justify-between items-baseline gap-2">
                                <span className="font-bold text-[#222222]">
                                    <span className="text-[#FF5F00] font-extrabold underline decoration-2 underline-offset-4 mr-1">¡BONO!</span> Sistema de DIGESTIÓN IMPECABLE en 6 semanas para mujeres, solo por el mes de Febrero.
                                </span>
                                <span className="font-bold text-[#CC0000] whitespace-nowrap">(Valor $194)</span>
                            </div>
                        </div>

                        {/* Item 3: Bono 2 */}
                        <div className="flex items-baseline text-lg md:text-xl">
                            <span className="text-[#009D43] text-2xl mr-3 font-bold">✓</span>
                            <div className="flex-1 border-b-2 border-dotted border-gray-400 pb-1 flex justify-between items-baseline gap-2">
                                <span className="font-bold text-[#222222]">
                                    <span className="text-[#FF5F00] font-extrabold underline decoration-2 underline-offset-4 mr-1">¡BONO!</span> Por la primera compra de FEBRERO: el KIT Ojos Luminosos.
                                </span>
                                <span className="font-bold text-[#CC0000] whitespace-nowrap">(Valor $100)</span>
                            </div>
                        </div>
                    </div>

                    {/* TOTAL VALUE */}
                    <div className="text-center mb-8">
                        <div className="text-[#27AE60] font-bold text-4xl md:text-5xl font-sans">
                            Valor Total: $491
                        </div>
                    </div>

                    {/* MOCKUP STACK */}
                    <div className="mb-10 mt-8 text-center">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://i.imgur.com/pxh8wT0.png"
                                alt="Sistema Ojos de Princesa - Mockup Completo"
                                className="w-full max-w-4xl h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Kennedy Style Headline */}
                    <div className="text-center mb-4">
                        <h3 className="text-[26px] font-['Playfair_Display'] font-bold text-[#222222] leading-tight">
                            Todo lo que tienes que hacer es decir "TAL VEZ" y el Sistema Completo será tuyo... <span className="border-b-4 border-[#8B0000]">¡SOLO POR HOY!</span>
                        </h3>
                    </div>

                    {/* PRICE PITCH */}
                    <div className="text-center mb-6">
                        <h3 className="text-4xl md:text-6xl font-sans font-black text-black uppercase tracking-tighter leading-none">
                            EMPIEZA HOY POR SOLO: <span className="text-[#CC0000]">$232.357 COP</span>
                        </h3>
                    </div>

                    {/* CTA - Botón de Compra ClickFunnels Style 3D */}
                    <div className="text-center mt-2">
                        <Link
                            to="/mvcheckout"
                            onClick={() => trackBeginCheckout('Sistema Ojos de Princesa', 57, 'MVOF Page')}
                            className="inline-flex flex-col items-center justify-center bg-[#2ECC71] hover:bg-[#27AE60] text-white py-5 px-6 md:px-12 rounded shadow-[0_6px_0_#1e8449] hover:shadow-[0_4px_0_#1e8449] active:shadow-[0_2px_0_#1e8449] active:translate-y-1 transition-all mb-8 w-full"
                        >
                            <div className="flex items-center gap-3">
                                {/* SVG Cart Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="font-bold text-xl md:text-3xl uppercase tracking-wide">
                                    ¡SÍ! Quiero Activar Mis Ojos de Princesa Ahora
                                </span>
                            </div>
                            <span className="text-sm md:text-lg font-medium mt-1 opacity-90">
                                Obtén acceso inmediato al protocolo y todos los bonos exclusivos
                            </span>
                        </Link>

                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-[#333333] font-bold text-sm">
                                Garantía de satisfacción de 7 días - Tu inversión está 100% protegida
                            </p>

                        </div>
                    </div>
                </section >

            </div >
        </div >
    );
};
