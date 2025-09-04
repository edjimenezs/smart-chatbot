import { NextApiRequest, NextApiResponse } from 'next'
import { Server as NetServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'

export const config = {
  api: {
    bodyParser: false,
  },
}

interface NextApiResponseServerIO extends NextApiResponse {
  socket: {
    server: NetServer & {
      io: SocketIOServer
    }
  }
}

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new SocketIOServer(res.socket.server, {
      path: '/api/socket',
      addTrailingSlash: false,
      cors: {
        origin: process.env.NODE_ENV === 'production' 
          ? 'https://chatbot-vercel.vercel.app' 
          : 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    })

    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('Usuario conectado:', socket.id)

      // Manejar mensajes del usuario
      socket.on('user-message', (data: { message: string }) => {
        console.log('Mensaje recibido:', data.message)
        
        // Simular procesamiento del chatbot
        setTimeout(() => {
          const botResponse = generateBotResponse(data.message)
          socket.emit('bot-message', { message: botResponse })
        }, 1000 + Math.random() * 2000) // Respuesta entre 1-3 segundos
      })

      socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id)
      })
    })
  }
  res.end()
}

// Función simple para generar respuestas del bot
function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()
  
  // Respuestas predefinidas
  const responses = {
    greeting: [
      '¡Hola! ¿Cómo estás?',
      '¡Saludos! ¿En qué puedo ayudarte?',
      '¡Hola! Me da mucho gusto verte por aquí.'
    ],
    question: [
      'Esa es una excelente pregunta. ¿Podrías ser más específico?',
      'Interesante pregunta. Déjame pensar en eso...',
      'Me gusta tu curiosidad. ¿Hay algo más que te gustaría saber?'
    ],
    help: [
      'Estoy aquí para ayudarte. ¿Qué necesitas?',
      'Puedo ayudarte con información general. ¿Qué te interesa?',
      '¡Por supuesto! Estoy aquí para asistirte.'
    ],
    goodbye: [
      '¡Hasta luego! Fue un placer charlar contigo.',
      '¡Adiós! Que tengas un excelente día.',
      '¡Nos vemos pronto! Cuídate mucho.'
    ],
    default: [
      'Eso es muy interesante. ¿Podrías contarme más?',
      'Entiendo. ¿Hay algo específico en lo que pueda ayudarte?',
      'Gracias por compartir eso conmigo. ¿Qué más te gustaría saber?',
      'Me parece fascinante. ¿Tienes alguna pregunta?'
    ]
  }

  // Detectar el tipo de mensaje
  if (message.includes('hola') || message.includes('hi') || message.includes('buenos días') || message.includes('buenas tardes') || message.includes('buenas noches')) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
  }
  
  if (message.includes('?') || message.includes('qué') || message.includes('cómo') || message.includes('cuándo') || message.includes('dónde') || message.includes('por qué')) {
    return responses.question[Math.floor(Math.random() * responses.question.length)]
  }
  
  if (message.includes('ayuda') || message.includes('help') || message.includes('asistencia')) {
    return responses.help[Math.floor(Math.random() * responses.help.length)]
  }
  
  if (message.includes('adiós') || message.includes('bye') || message.includes('hasta luego') || message.includes('nos vemos')) {
    return responses.goodbye[Math.floor(Math.random() * responses.goodbye.length)]
  }
  
  // Respuesta por defecto
  return responses.default[Math.floor(Math.random() * responses.default.length)]
}

export default SocketHandler
