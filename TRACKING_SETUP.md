# Tracking GTM DataLayer - Implementación

## ✅ YA IMPLEMENTADO:

### 1. Utilidad de Tracking (`src/utils/tracking.ts`)
- ✅ Funciones para todos los eventos del funnel
- ✅ Push automático a `window.dataLayer`
- ✅ Console.log para debugging

### 2. QuizPage - Respuestas del Quiz
- ✅ `trackQuizAnswer()` en cada respuesta (Q1-Q6)
- ✅ `trackQuizComplete()` al finalizar el quiz

## 🔧 PENDIENTE DE AGREGAR MANUALMENTE:

### 3. QuizPage - Eventos Adicionales

**A. Track quiz start (cuando se hace click en "Empezar Diagnóstico"):**

Agregar después de `const totalQuestions = 6;` (línea ~32):

```tsx
// Track cuando se inicia el quiz
useEffect(() => {
    if (quizStarted && currentQuestion === 0) {
        trackQuizStart();
    }
}, [quizStarted]);
```

**B. Track opt-in view (cuando aparece el formulario):**

Buscar en `startLoadingSequence()` el bloque:
```tsx
setTimeout(() => {
    setIsLoading(false);
    setShowOptIn(true);
}, 200);
```

Cambiar por:
```tsx
setTimeout(() => {
    setIsLoading(false);
    setShowOptIn(true);
    trackOptInView(answers.concern || 'unknown');
}, 200);
```

**C. Track opt-in submit (antes de redirigir):**

En `handleOptInSubmit`, después del `console.log` (línea ~204), agregar:

```tsx
// Track opt-in submit con todos los datos
trackOptInSubmit(userName, userEmail, answers);
```

---

### 4. Landings - Track de Vistas y CTAs

**Para cada landing (EyesLanding.tsx, GravityLanding.tsx, TensionLanding.tsx):**

**A. Importar funciones:**
```tsx
import { useEffect } from 'react';
import { trackLandingView, trackCTAClick, trackWhatsAppClick } from '../utils/tracking';
```

**B. Agregar useEffect para trackear vista:**

En EyesLanding:
```tsx
useEffect(() => {
    trackLandingView('mirada_radiante', 10, 'eyes');
}, []);
```

En GravityLanding:
```tsx
useEffect(() => {
    trackLandingView('efecto_lifting', 150, 'gravity');
}, []);
```

En TensionLanding:
```tsx
useEffect(() => {
    trackLandingView('rostro_sin_tension', 150, 'tension');
}, []);
```

**C. Agregar onClick a botones CTA:**

Crear handlers antes del return:
```tsx
const handleCTAClick = (position: string) => {
    trackCTAClick('nombre_landing', position, precio);
};

const handleWhatsAppClick = () => {
    trackWhatsAppClick('nombre_landing');
};
```

Agregar onClick a cada botón de compra:
```tsx
<a 
    href="https://go.hotmart.com/H104278052V?ap=8b75"
    onClick={() => handleCTAClick('main')} {/* <-- AGREGAR */}
    ...
>
```

Y al botón de WhatsApp (solo en Gravity y Tension):
```tsx
<a 
    href="https://wa.me/51992748352"
    onClick={handleWhatsAppClick} {/* <-- AGREGAR */}
    ...
>
```

---

## 📊 EVENTOS QUE SE ENVIARÁN AL DATALAYER:

### Quiz:
1. `quiz_started` - Cuando empieza el quiz
2. `quiz_answer` - Por cada respuesta (6 eventos)
3. `quiz_completed` - Al finalizar con todos los datos

### Opt-in:
4. `optin_viewed` - Cuando aparece el formulario
5. `optin_submitted` - Al enviar con nombre, email y datos del quiz

### Landings:
6. `landing_viewed` - Al cargar cada landing (con segment)
7. `cta_clicked` - Por cada click en botón de compra
8. `whatsapp_clicked` - Por cada click en WhatsApp

---

## 🧪 CÓMO VERIFICAR:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Verás mensajes `📊 GTM Event:` con cada evento
4. También puedes ver `window.dataLayer` en la consola

---

## 🎯 SIGUIENTE PASO - CONFIGURAR GTM:

Cuando tengas GTM instalado:
1. Crea triggers para cada evento (`quiz_started`, `quiz_answer`, etc.)
2. Crea tags para enviar a Google Analytics, Facebook Pixel, etc.
3. Usa las variables del dataLayer para enriquecer los eventos
