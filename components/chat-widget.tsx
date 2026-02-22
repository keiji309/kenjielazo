'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help!",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const profileImg = theme === 'dark' ? '/profile-dark.png' : '/profile.png'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble responding right now. Please try again later or contact Kenjie directly.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-shadow ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">Chat with Kenjie</span>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={profileImg}
                    alt="Kenjie P. Lazo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with Kenjie</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-start gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={profileImg}
                          alt="Kenjie"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Kenjie Lazo</p>
                        <div className="bg-muted p-3 rounded-2xl rounded-tl-none max-w-[260px]">
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {message.role === 'user' && (
                    <div className="bg-accent text-white p-3 rounded-2xl rounded-tr-none max-w-[260px]">
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={profileImg}
                      alt="Kenjie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, 1000))}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-muted rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>Ask me about programming, web dev, or tech!</span>
                <span>{input.length}/1000</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}