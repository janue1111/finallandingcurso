# 🎯 Estructura de Rutas del Proyecto

## 📍 Rutas Configuradas

### **`/` (Raíz) - Quiz Funnel**
- **URL**: `http://localhost:3000/`
- **Propósito**: Página principal del quiz funnel
- **Uso**: Esta es la URL que se usará en los anuncios
- **Estado**: ✅ Configurada (placeholder listo para construcción)

### **`/vsl` - Landing VSL**
- **URL**: `http://localhost:3000/vsl`
- **Propósito**: Landing original (método japonés de estudio)
- **Uso**: Fallback/respaldo
- **Estado**: ✅ Operativa (contenido movido exitosamente)

---

## 📂 Estructura de Archivos

```
src/
├── App.tsx                    # Router principal
├── main.tsx                   # Entry point
├── pages/
│   ├── QuizPage.tsx          # 🆕 Página del Quiz (raíz)
│   └── VSLPage.tsx           # 🆕 Landing VSL (fallback)
├── components/
│   └── sections/             # Componentes de la VSL
└── ...
```

---

## 🚀 Próximos Pasos

1. **Desarrollar el Quiz Funnel** en `src/pages/QuizPage.tsx`
   - Diseñar preguntas
   - Implementar lógica de navegación
   - Crear diferentes rutas según respuestas

2. **Crear Landings Específicas**
   - Según las rutas del quiz funnel
   - Adaptar contenido para "Yoga Facial"

3. **Configurar Redirecciones**
   - Del quiz a las landings correspondientes

---

## 🧪 Testing

Puedes verificar las rutas:
- Quiz: http://localhost:3000/
- VSL: http://localhost:3000/vsl

---

## 📝 Notas

- ✅ React Router instalado y configurado
- ✅ Landing original preservada en `/vsl`
- ✅ Raíz `/` lista para el quiz
- ✅ Servidor corriendo en puerto 3000
