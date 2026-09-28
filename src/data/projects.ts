export type Project = {
    number: string
    title: string
    description: string
    category: string
    stack: string[]
    status?: string
    link?: string
    linkLabel?: string
    preview?: string
  }
  
  export const projects: Project[] = [
    {
      number: '01',
      title: 'BloomTrace',
      description:
        'An interactive computer-vision experiment combining hand and face tracking with real-time visual interaction, where gestures become part of an animated digital garden.',
      category: 'Computer Vision',
      stack: ['React', 'MediaPipe', 'TypeScript'],
      linkLabel: 'Explore',
      preview: 'BLOOM / TRACE',
    },
    {
      number: '02',
      title: 'FinGuard AI',
      description:
        'An AI-powered financial platform for transaction monitoring, financial health scoring and credit-risk assessment.',
      category: 'AI / FinTech',
      stack: ['Python', 'FastAPI', 'Streamlit', 'ML'],
      link: 'https://github.com/Srishti-s28/FinGuard-AI',
      linkLabel: 'GitHub',
      preview: 'FIN / GUARD',
    },
    {
      number: '03',
      title: 'SentinelPulse',
      description:
        'A full-stack uptime monitoring platform with automated health checks, alerts and live service analytics.',
      category: 'Full Stack',
      stack: ['FastAPI', 'React', 'PostgreSQL'],
      link: 'https://github.com/Srishti-s28/sentinelpulse',
      linkLabel: 'GitHub',
      preview: 'SYSTEM / ONLINE',
    },
    {
      number: '04',
      title: 'Codebase AI',
      description:
        'A RAG-powered assistant that understands codebases and helps developers search, explain and debug code.',
      category: 'AI / Developer Tools',
      stack: ['LangChain', 'FAISS', 'LLaMA 3', 'Python'],
      link: 'https://github.com/Srishti-s28/codebase-qa-system',
      linkLabel: 'GitHub',
      preview: 'RAG / CODE',
    },
    {
      number: '05',
      title: 'Emotion Detection FYP',
      description:
        'An NLP-based conversational system that detects user emotions from text and generates responsive chatbot interactions.',
      category: 'AI / NLP',
      stack: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      linkLabel: 'Explore',
      preview: 'NLP / EMOTION',
    },
    {
      number: '06',
      title: 'JARVIS',
      description:
        'A personal AI assistant experiment exploring voice interaction, automation and conversational interfaces.',
      category: 'AI / Assistant',
      stack: ['React', 'TypeScript', 'AI'],
      status: 'BUILDING',
      linkLabel: 'In progress',
      preview: 'AI / BUILDING',
    },
  ]