// Utility para enviar eventos a GTM DataLayer
declare global {
    interface Window {
        dataLayer: any[];
    }
}

// Inicializar dataLayer si no existe
if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
}

// Función helper para pushear eventos
export const pushToDataLayer = (event: string, data: any = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event,
            ...data,
            timestamp: new Date().toISOString(),
        });
        console.log('📊 GTM Event:', event, data); // Para debugging
    }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
    pushToDataLayer('virtual_page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        newUrl: window.location.href,
        oldUrl: document.referrer || '',
    });
};

// Eventos del Quiz
export const trackQuizStart = () => {
    pushToDataLayer('quiz_started', {
        funnel_step: 'welcome',
        funnel_name: 'facial_yoga_quiz',
    });
};

export const trackQuizAnswer = (questionNumber: number, questionKey: string, answer: string) => {
    pushToDataLayer('quiz_answer', {
        funnel_step: 'question',
        question_number: questionNumber,
        question_key: questionKey,
        answer_value: answer,
    });
};

export const trackQuizComplete = (answers: any) => {
    pushToDataLayer('quiz_completed', {
        funnel_step: 'quiz_complete',
        age_range: answers.age,
        situation: answers.situation,
        time_concerned: answers.timeConcerned,
        main_concern: answers.concern, // Este determina el segmento
        skin_type: answers.skinType,
        time_available: answers.timeAvailable,
        segment: answers.concern, // Importante para ver qué landing verá
    });
};

// Eventos del Opt-in
export const trackOptInView = (segment: string) => {
    pushToDataLayer('optin_viewed', {
        funnel_step: 'optin',
        segment: segment,
    });
};

export const trackOptInSubmit = (userName: string, userEmail: string, answers: any = {}) => {
    pushToDataLayer('optin_submitted', {
        funnel_step: 'optin_complete',
        user_name: userName,
        user_email: userEmail,
        landing_name: answers.landing_name,
        oldUrl: answers.oldUrl,
        newUrl: answers.newUrl,
        segment: answers.concern || 'general',
        // Datos completos del quiz si existen
        ...(Object.keys(answers).length > 0 && {
            quiz_data: {
                age_range: answers.age,
                situation: answers.situation,
                time_concerned: answers.timeConcerned,
                main_concern: answers.concern,
                skin_type: answers.skinType,
                time_available: answers.timeAvailable,
            }
        }),
    });
};

// Eventos de las Landings
export const trackLandingView = (landingName: string, price: number, segment: string) => {
    pushToDataLayer('landing_viewed', {
        funnel_step: 'landing_page',
        landing_name: landingName,
        product_price: price,
        segment: segment,
    });
};

export const trackCTAClick = (landingName: string, ctaPosition: string, price: number) => {
    pushToDataLayer('cta_clicked', {
        funnel_step: 'checkout_click',
        landing_name: landingName,
        cta_position: ctaPosition, // 'main' o 'secondary'
        product_price: price,
        destination: 'hotmart_checkout',
    });
};

export const trackWhatsAppClick = (landingName: string) => {
    pushToDataLayer('whatsapp_clicked', {
        funnel_step: 'contact_click',
        landing_name: landingName,
        contact_type: 'whatsapp',
    });
};

// Evento de E-commerce: Add Payment Info (para botones de compra)
export const trackAddPaymentInfo = (productName: string, price: number, landingName: string) => {
    // Recuperar datos del usuario desde localStorage
    let userData = { name: '', email: '' };
    try {
        const stored = localStorage.getItem('userData');
        if (stored) {
            userData = JSON.parse(stored);
        }
    } catch (e) {
        console.warn('No se pudo recuperar userData:', e);
    }

    pushToDataLayer('add_payment_info', {
        currency: 'USD',
        value: price,
        payment_type: 'hotmart',
        landing_name: landingName,
        // Datos del usuario para mejorar matching con plataformas publicitarias
        user_data: {
            email: userData.email || undefined,
            name: userData.name || undefined,
        },
        items: [{
            item_id: landingName,
            item_name: productName,
            price: price,
            quantity: 1,
        }],
    });
};

export const trackBeginCheckout = (productName: string, price: number, landingName: string) => {
    // Recuperar datos del usuario desde localStorage
    let userData = { name: '', email: '' };
    try {
        const stored = localStorage.getItem('userData');
        if (stored) {
            userData = JSON.parse(stored);
        }
    } catch (e) {
        console.warn('No se pudo recuperar userData:', e);
    }

    pushToDataLayer('begin_checkout', {
        currency: 'USD',
        value: price,
        landing_name: landingName,
        user_data: {
            email: userData.email || undefined,
            name: userData.name || undefined,
        },
        items: [{
            item_id: landingName,
            item_name: productName,
            price: price,
            quantity: 1,
        }],
    });
};

export const trackPurchase = (formData: any, productName: string, price: number) => {
    pushToDataLayer('purchase', {
        currency: 'USD',
        value: price,
        transaction_id: 'TXN_' + Math.floor(Math.random() * 1000000), // Simulación de ID
        user_data: {
            email: formData.email,
            phone_number: formData.countryCode + formData.phoneNumber,
            name: formData.fullName,
        },
        items: [{
            item_id: 'eyes_princess_system',
            item_name: productName,
            price: price,
            quantity: 1,
        }],
    });
};
