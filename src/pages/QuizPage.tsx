import { useState, useEffect } from 'react';
import { Sparkles, Heart, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import {
    trackQuizStart,
    trackQuizAnswer,
    trackQuizComplete,
    trackOptInView,
    trackOptInSubmit
} from '../utils/tracking';

type QuizAnswers = {
    age?: string;
    situation?: string;
    timeConcerned?: string;
    concern?: string; // 'eyes' | 'gravity' | 'tension' - Define la oferta
    skinType?: string;
    timeAvailable?: string;
};

export function QuizPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswers>({});
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [showOptIn, setShowOptIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const totalQuestions = 6; // Ajustable según el número final de preguntas

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
    };

    const handleContinue = () => {
        if (!selectedOption) return;

        // Guardar respuesta según la pregunta actual
        let questionKey = '';
        if (currentQuestion === 0) {
            setAnswers({ ...answers, age: selectedOption });
            questionKey = 'age';
        } else if (currentQuestion === 1) {
            setAnswers({ ...answers, situation: selectedOption });
            questionKey = 'situation';
        } else if (currentQuestion === 2) {
            setAnswers({ ...answers, timeConcerned: selectedOption });
            questionKey = 'time_concerned';
        } else if (currentQuestion === 3) {
            setAnswers({ ...answers, concern: selectedOption });
            questionKey = 'main_concern';
        } else if (currentQuestion === 4) {
            setAnswers({ ...answers, skinType: selectedOption });
            questionKey = 'skin_type';
        } else if (currentQuestion === 5) {
            // Última pregunta - iniciar pantalla de carga
            const finalAnswers = { ...answers, timeAvailable: selectedOption };
            setAnswers(finalAnswers);
            questionKey = 'time_available';

            // Track respuesta final y quiz completo
            trackQuizAnswer(currentQuestion + 1, questionKey, selectedOption);
            trackQuizComplete(finalAnswers);

            setIsLoading(true);
            startLoadingSequence();
            return; // No avanzar a la siguiente pregunta todavía
        }

        // Track cada respuesta (excepto la última que se trackea arriba)
        if (currentQuestion < 5) {
            trackQuizAnswer(currentQuestion + 1, questionKey, selectedOption);
        }

        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
    };

    const startLoadingSequence = () => {
        const messages = [
            'Analizando tus respuestas...',
            'Comparando con tu rango de edad...',
            'Identificando tu tipo de piel...',
            'Generando tu plan personalizado...'
        ];

        let currentMessageIndex = 0;
        let progress = 0;

        // Mostrar primer mensaje
        setLoadingMessage(messages[0]);

        const interval = setInterval(() => {
            progress += 1; // Incrementar 1% cada 50ms = 5 segundos total
            setLoadingProgress(progress);

            // Cambiar mensaje cada 25% (cada ~1.25 segundos)
            if (progress >= 25 && currentMessageIndex === 0) {
                currentMessageIndex = 1;
                setLoadingMessage(messages[1]);
            } else if (progress >= 50 && currentMessageIndex === 1) {
                currentMessageIndex = 2;
                setLoadingMessage(messages[2]);
            } else if (progress >= 75 && currentMessageIndex === 2) {
                currentMessageIndex = 3;
                setLoadingMessage(messages[3]);
            }

            // Cuando llegue a 100%, mostrar opt-in
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    setShowOptIn(true);
                }, 300);
            }
        }, 50); // Actualizar cada 50ms para animación suave (5 segundos total)
    };


    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

    // Pantalla de carga intersticial
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                    <div className="max-w-2xl w-full">
                        {/* Loading card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border border-pink-100 animate-fade-in-up text-center">
                            {/* Animated icon */}
                            <div className="flex justify-center mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                                    <div className="relative bg-gradient-to-br from-pink-500 to-purple-500 p-8 rounded-full animate-spin-slow">
                                        <Sparkles className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Loading message */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-pulse">
                                {loadingMessage}
                            </h2>

                            {/* Progress bar */}
                            <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${loadingProgress}%` }}
                                ></div>
                            </div>

                            {/* Progress percentage */}
                            <p className="text-lg font-semibold text-pink-600">
                                {Math.round(loadingProgress)}%
                            </p>

                            <p className="text-sm text-gray-500 mt-4">
                                Esto solo tomará unos segundos...
                            </p>
                        </div>
                    </div>
                </div>

                <QuizStyles />

                {/* Custom animation for loading icon */}
                <style>{`
                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    
                    .animate-spin-slow {
                        animation: spin-slow 3s linear infinite;
                    }
                `}</style>
            </div>
        );
    }

    // Pantalla de Opt-in (Captura de Email + Nombre)
    if (showOptIn) {
        const handleOptInSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (!userName.trim() || !userEmail.trim()) return;

            // TODO: Aquí irá la redirección a la landing de venta según answers.concern
            console.log('Formulario enviado:', { userName, userEmail, answers });

            // 📊 Track opt-in submit con todos los datos
            trackOptInSubmit(userName, userEmail, answers);

            // 💾 Guardar datos del usuario en localStorage para tracking posterior
            localStorage.setItem('userData', JSON.stringify({
                name: userName,
                email: userEmail,
                timestamp: new Date().toISOString()
            }));

            // Redirección según la preocupación principal
            if (answers.concern === 'eyes') {
                window.location.href = '/mirada-radiante';
                return;
            } else if (answers.concern === 'gravity') {
                window.location.href = '/efecto-lifting';
                return;
            } else if (answers.concern === 'tension') {
                window.location.href = '/rostro-sin-tension';
                return;
            }

            // Por ahora mostrar placeholder de resultados
            setShowOptIn(false);
            setCurrentQuestion(6);
        };

        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-2xl w-full">
                        {/* Opt-in card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 animate-fade-in-up">
                            {/* Success icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-50"></div>
                                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-full">
                                        <CheckCircle2 className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                                ¡Análisis Completo!
                            </h2>

                            {/* Subtitle */}
                            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                                Hemos identificado tu perfil de envejecimiento facial. Ingresa tus datos abajo para enviarte tu diagnóstico y la rutina recomendada para tu caso.
                            </p>

                            {/* Form */}
                            <form onSubmit={handleOptInSubmit} className="space-y-5 mb-6">
                                {/* Name input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Tu Primer Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Ejemplo: María"
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {/* Email input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Tu Mejor Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        placeholder="ejemplo@email.com"
                                        required
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-bold text-lg px-8 py-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95 mt-6"
                                >
                                    <span>Ver mis Resultados</span>
                                    <Sparkles className="w-5 h-5" />
                                </button>
                            </form>

                            {/* Privacy note */}
                            <p className="text-xs text-center text-gray-500">
                                🔒 Tu información está segura. No compartimos tus datos con terceros.
                            </p>
                        </div>

                        {/* Trust indicator */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                ✨ Únete a más de 1,500 mujeres que ya transformaron su rostro
                            </p>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }


    // Pregunta 1: Rango de edad
    if (quizStarted && currentQuestion === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 1 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                                Para empezar, ¿cuál es tu rango de edad actual?
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { value: '25-35', label: 'Entre 25 y 35 años', subtitle: 'Prevención' },
                                    { value: '36-45', label: 'Entre 36 y 45 años', subtitle: 'Primeros signos' },
                                    { value: '46-55', label: 'Entre 46 y 55 años', subtitle: 'Signos visibles' },
                                    { value: '56+', label: 'Más de 56 años', subtitle: 'Madurez' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSelectOption(option.value)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === option.value
                                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedOption === option.value
                                                ? 'border-pink-500 bg-pink-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.value && (
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 text-lg">{option.label}</p>
                                                <p className="text-sm text-gray-500 mt-1">{option.subtitle}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Continuar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Pregunta 2: Situación actual
    if (quizStarted && currentQuestion === 1) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 2 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                                ¿Cuál de estas frases describe mejor cómo te sientes respecto al cuidado de tu rostro hoy?
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { value: 'no-results', label: 'Uso cremas y serums, pero siento que ya no me dan resultados visibles' },
                                    { value: 'natural', label: 'Me da miedo el Botox o las cirugías, prefiero algo 100% natural' },
                                    { value: 'inconsistent', label: 'He intentado masajes faciales antes, pero no soy constante o no sé si lo hago bien' },
                                    { value: 'nothing', label: 'No hago nada especial, pero noto que mi rostro está cambiando' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSelectOption(option.value)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === option.value
                                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${selectedOption === option.value
                                                ? 'border-pink-500 bg-pink-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.value && (
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <p className="font-medium text-gray-800 text-base leading-relaxed">{option.label}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Continuar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Pregunta 3: Agitación del dolor
    if (quizStarted && currentQuestion === 2) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 3 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                                ¿Desde hace cuánto tiempo has notado estos cambios en tu rostro que te preocupan?
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { value: 'recent', label: 'Recientemente (en los últimos 6 meses)' },
                                    { value: '1-2years', label: 'Ya hace 1 o 2 años que lo noto' },
                                    { value: 'longtime', label: 'Llevo mucho tiempo lidiando con esto y siento que empeora' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSelectOption(option.value)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === option.value
                                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${selectedOption === option.value
                                                ? 'border-pink-500 bg-pink-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.value && (
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <p className="font-medium text-gray-800 text-base leading-relaxed">{option.label}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Continuar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Pregunta 4: Preocupación principal (SEGMENTACIÓN)
    if (quizStarted && currentQuestion === 3) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 4 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                                Cuando te miras al espejo, ¿qué es lo ÚNICO que te molesta más y te urge solucionar primero?
                            </h2>
                            <p className="text-center text-sm text-gray-500 mb-8">
                                Selecciona la opción que mejor describe tu preocupación principal
                            </p>

                            <div className="space-y-4 mb-8">
                                {/* Opción A - OJOS ($10) */}
                                <button
                                    onClick={() => handleSelectOption('eyes')}
                                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === 'eyes'
                                        ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                        : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${selectedOption === 'eyes'
                                            ? 'border-pink-500 bg-pink-500'
                                            : 'border-gray-300'
                                            }`}>
                                            {selectedOption === 'eyes' && (
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-lg mb-1">👁️ Mi mirada</p>
                                            <p className="text-gray-600 leading-relaxed">Tengo bolsas, ojeras oscuras o siento el párpado caído.</p>
                                        </div>
                                    </div>
                                </button>

                                {/* Opción B - GRAVEDAD ($150) */}
                                <button
                                    onClick={() => handleSelectOption('gravity')}
                                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === 'gravity'
                                        ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                        : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${selectedOption === 'gravity'
                                            ? 'border-pink-500 bg-pink-500'
                                            : 'border-gray-300'
                                            }`}>
                                            {selectedOption === 'gravity' && (
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-lg mb-1">⬇️ La flacidez general</p>
                                            <p className="text-gray-600 leading-relaxed">Siento que mis mejillas o papada se "derriten" hacia abajo y se marcan los surcos.</p>
                                        </div>
                                    </div>
                                </button>

                                {/* Opción C - TENSIÓN ($150) */}
                                <button
                                    onClick={() => handleSelectOption('tension')}
                                    className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === 'tension'
                                        ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                        : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${selectedOption === 'tension'
                                            ? 'border-pink-500 bg-pink-500'
                                            : 'border-gray-300'
                                            }`}>
                                            {selectedOption === 'tension' && (
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-lg mb-1">😣 Tensión o Rigidez</p>
                                            <p className="text-gray-600 leading-relaxed">Sufro de bruxismo, dolor de mandíbula o noto un lado de la cara más caído que el otro.</p>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Continuar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Pregunta 5: Tipo de piel
    if (quizStarted && currentQuestion === 4) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 5 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                                Para asegurarnos de recomendarte la técnica correcta, ¿cuál es tu tipo de piel?
                            </h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { value: 'dry-sensitive', label: 'Piel Seca o Sensible', subtitle: 'Tiende a enrojecerse' },
                                    { value: 'oily-mixed', label: 'Piel Grasa o Mixta', subtitle: '' },
                                    { value: 'normal', label: 'Piel Normal', subtitle: '' },
                                    { value: 'not-sure', label: 'No estoy segura', subtitle: '' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSelectOption(option.value)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === option.value
                                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedOption === option.value
                                                ? 'border-pink-500 bg-pink-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.value && (
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 text-lg">{option.label}</p>
                                                {option.subtitle && <p className="text-sm text-gray-500 mt-1">{option.subtitle}</p>}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Continuar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Pregunta 6: Tiempo disponible (ÚLTIMA PREGUNTA)
    if (quizStarted && currentQuestion === 5) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                    <div className="max-w-3xl w-full">
                        {/* Progress indicator */}
                        <div className="mb-8 animate-fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-600">Pregunta 6 de {totalQuestions}</span>
                                <span className="text-sm font-semibold text-pink-600">{Math.round(progressPercentage)}% Completado</span>
                            </div>
                            <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                                Finalmente, para adaptar la rutina a tu estilo de vida:
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 text-center">
                                ¿Cuánto tiempo real puedes dedicarte a ti misma al día?
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { value: '5-10min', label: 'Solo 5 a 10 minutos', subtitle: 'Necesito algo rápido y efectivo' },
                                    { value: '15-20min', label: 'Entre 15 y 20 minutos', subtitle: '' },
                                    { value: 'whatever-needed', label: 'El tiempo que sea necesario para ver cambios reales', subtitle: '' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSelectOption(option.value)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${selectedOption === option.value
                                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg'
                                            : 'border-gray-200 bg-white hover:border-pink-300 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${selectedOption === option.value
                                                ? 'border-pink-500 bg-pink-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedOption === option.value && (
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 text-lg">{option.label}</p>
                                                {option.subtitle && <p className="text-sm text-gray-500 mt-1">{option.subtitle}</p>}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleContinue}
                                disabled={!selectedOption}
                                className={`w-full flex items-center justify-center gap-3 font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all duration-300 ${selectedOption
                                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white hover:shadow-pink-500/50 hover:scale-105 active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <span>Ver Mi Diagnóstico Personalizado</span>
                                <Sparkles className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <QuizStyles />
            </div>
        );
    }

    // Placeholder para las siguientes preguntas (Resultados)
    if (quizStarted && currentQuestion > 5) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-pink-100 max-w-2xl">
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Pregunta {currentQuestion + 1} en construcción
                    </h2>
                    <div className="space-y-2 text-left bg-pink-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-700"><span className="font-semibold">Edad:</span> <span className="text-pink-600">{answers.age}</span></p>
                        <p className="text-gray-700"><span className="font-semibold">Situación:</span> <span className="text-pink-600">{answers.situation}</span></p>
                        <p className="text-gray-700"><span className="font-semibold">Tiempo:</span> <span className="text-pink-600">{answers.timeConcerned}</span></p>
                        <p className="text-gray-700"><span className="font-semibold">Preocupación:</span> <span className="text-pink-600 font-bold">
                            {answers.concern === 'eyes' && '👁️ Mirada ($10)'}
                            {answers.concern === 'gravity' && '⬇️ Flacidez ($150)'}
                            {answers.concern === 'tension' && '😣 Tensión ($150)'}
                        </span></p>
                        <p className="text-gray-700"><span className="font-semibold">Tipo de piel:</span> <span className="text-pink-600">{answers.skinType}</span></p>
                        <p className="text-gray-700"><span className="font-semibold">Tiempo disponible:</span> <span className="text-pink-600">{answers.timeAvailable}</span></p>
                    </div>
                    <p className="text-sm text-gray-500">✨ Quiz completado - Todas las respuestas guardadas</p>
                </div>
            </div>
        );
    }

    // Pantalla de bienvenida (landing del quiz)
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">
                <div className="max-w-4xl w-full">
                    {/* Header badge */}
                    <div className="flex justify-center mb-8 animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-pink-100">
                            <Sparkles className="w-5 h-5 text-pink-500" />
                            <span className="text-sm font-semibold text-gray-700">
                                Diagnóstico Personalizado • 100% Online
                            </span>
                        </div>
                    </div>

                    {/* Main card */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 animate-fade-in-up">
                        {/* Icon */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-2xl opacity-50"></div>
                                <div className="relative bg-gradient-to-br from-pink-500 to-purple-500 p-6 rounded-full">
                                    <Heart className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                            Diagnóstico de Edad Facial: Descubre qué zona de tu rostro está envejeciendo más rápido y cómo detenerlo.
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-gray-700 text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                            Responde estas <span className="font-semibold text-pink-600">preguntas rápidas</span> para recibir tu perfil personalizado y una rutina específica para tu caso{' '}
                            <span className="font-semibold">(sin cirugías ni inyecciones)</span>.
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">100% Personalizado</h3>
                                    <p className="text-sm text-gray-600">Basado en tus respuestas únicas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                                <Clock className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Solo 2 Minutos</h3>
                                    <p className="text-sm text-gray-600">Rápido y fácil de completar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                                <Sparkles className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Sin Cirugías</h3>
                                    <p className="text-sm text-gray-600">Métodos naturales y efectivos</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <button
                                onClick={() => setQuizStarted(true)}
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">Comenzar Diagnóstico</span>
                                <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />

                                {/* Animated gradient border */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                            </button>

                            <p className="mt-6 text-sm text-gray-500">
                                ✨ Más de 1,500 mujeres ya han descubierto su perfil facial
                            </p>
                        </div>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-8 text-center animate-fade-in">
                        <div className="inline-flex items-center gap-8 text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Completamente gratis
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Resultados instantáneos
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Sin compromiso
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <QuizStyles />
        </div>
    );
}

// Componente separado para los estilos (para reutilizar)
function QuizStyles() {
    return (
        <style>{`
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }

      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .animate-fade-in {
        animation: fade-in 0.6s ease-out;
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out;
      }
    `}</style>
    );
}
