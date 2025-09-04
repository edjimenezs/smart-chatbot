# ChatBot con WebSocket para Vercel

Un chatbot moderno con comunicación en tiempo real usando WebSocket, construido con Next.js y optimizado para deployment en Vercel.

## 🚀 Características

- **Comunicación en tiempo real** con WebSocket
- **Interfaz moderna** con Tailwind CSS
- **Responsive design** para móviles y desktop
- **Deploy automático** en Vercel
- **TypeScript** para mejor desarrollo
- **Estado de conexión** en tiempo real

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **Socket.IO** - Comunicación WebSocket
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Vercel** - Hosting y deployment

## 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/chatbot-vercel.git
cd chatbot-vercel
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
cp env.example .env.local
```

4. **Ejecuta en desarrollo**
```bash
npm run dev
```

## 🚀 Deployment en Vercel

### Opción 1: Deploy automático desde GitHub

1. **Sube tu código a GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configura las variables de entorno en Vercel**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Agrega: `NEXT_PUBLIC_SOCKET_URL` = `https://tu-dominio.vercel.app`

### Opción 2: Deploy con Vercel CLI

1. **Instala Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

## 🔧 Configuración

### Variables de entorno

- `NEXT_PUBLIC_SOCKET_URL`: URL del servidor WebSocket
  - Desarrollo: `http://localhost:3000`
  - Producción: `https://tu-dominio.vercel.app`

### Personalización del Bot

Edita el archivo `pages/api/socket.ts` para modificar las respuestas del bot:

```typescript
function generateBotResponse(userMessage: string): string {
  // Agrega tus propias respuestas aquí
  const responses = {
    greeting: ['¡Hola! ¿Cómo estás?'],
    // ... más respuestas
  }
}
```

## 📱 Uso

1. **Abre la aplicación** en tu navegador
2. **Verifica la conexión** - el indicador debe estar en verde
3. **Escribe un mensaje** y presiona Enter
4. **Recibe respuestas** del bot en tiempo real

## 🎨 Personalización

### Cambiar colores
Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#tu-color',
      }
    }
  }
}
```

### Agregar nuevas funcionalidades
- **Persistencia**: Integra una base de datos
- **Autenticación**: Agrega login de usuarios
- **Múltiples salas**: Implementa rooms de chat
- **Archivos**: Permite envío de imágenes/archivos

## 🐛 Solución de problemas

### WebSocket no conecta
- Verifica que las variables de entorno estén configuradas
- Asegúrate de que el puerto 3000 esté libre
- Revisa la consola del navegador para errores

### Deploy falla en Vercel
- Verifica que `vercel.json` esté configurado correctamente
- Asegúrate de que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel

## 📄 Estructura del proyecto

```
chatbot-vercel/
├── pages/
│   ├── api/
│   │   └── socket.ts          # Servidor WebSocket
│   ├── _app.tsx               # App principal
│   └── index.tsx              # Página principal
├── contexts/
│   └── SocketContext.tsx      # Context de WebSocket
├── styles/
│   └── globals.css            # Estilos globales
├── package.json               # Dependencias
├── next.config.js             # Configuración Next.js
├── vercel.json                # Configuración Vercel
└── README.md                  # Documentación
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Eduardo Saavedra**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

⭐ ¡Dale una estrella si te gustó el proyecto!
