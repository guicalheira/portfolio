'use client'

// ============================================
// Contact Section
// Formulário elegante com animações e validação
// ============================================

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

interface FormState {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const t = useTranslations()
  const formRef = useRef<HTMLFormElement>(null)
  
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simula envio (substitua por sua API real)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset após 5 segundos
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <section id="contact" className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-body-sm text-accent mb-4">
              <span className="w-8 h-[1px] bg-accent" />
              {t.contact.subtitle}
            </span>

            <h2 className="section-title mb-8">{t.contact.title}</h2>

            <p className="text-body-lg text-foreground-muted mb-12 max-w-md">
              {t.contact.subtitle}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <SocialLink
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
                label="github.com/guicalheira"
                href="https://github.com/guicalheira"
              />
              <SocialLink
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
                label="LinkedIn"
                href="https://linkedin.com/in/guicalheira"
              />
              <SocialLink
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6L12 13L2 6" />
                  </svg>
                }
                label="guicalheira14@gmail.com"
                href="mailto:guicalheira14@gmail.com"
              />
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Nome */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                className="relative"
              >
                <label
                  htmlFor="name"
                  className={cn(
                    'absolute left-4 transition-all duration-300 pointer-events-none',
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs text-accent'
                      : 'top-1/2 -translate-y-1/2 text-body-md text-foreground-muted'
                  )}
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={cn(
                    'w-full px-4 pt-6 pb-3 bg-background-secondary border rounded-xl',
                    'text-foreground placeholder-transparent',
                    'transition-all duration-300 outline-none',
                    focusedField === 'name'
                      ? 'border-accent shadow-[0_0_20px_rgba(212,168,83,0.1)]'
                      : 'border-border hover:border-border-hover'
                  )}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                className="relative"
              >
                <label
                  htmlFor="email"
                  className={cn(
                    'absolute left-4 transition-all duration-300 pointer-events-none',
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs text-accent'
                      : 'top-1/2 -translate-y-1/2 text-body-md text-foreground-muted'
                  )}
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={cn(
                    'w-full px-4 pt-6 pb-3 bg-background-secondary border rounded-xl',
                    'text-foreground placeholder-transparent',
                    'transition-all duration-300 outline-none',
                    focusedField === 'email'
                      ? 'border-accent shadow-[0_0_20px_rgba(212,168,83,0.1)]'
                      : 'border-border hover:border-border-hover'
                  )}
                />
              </motion.div>

              {/* Mensagem */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                className="relative"
              >
                <label
                  htmlFor="message"
                  className={cn(
                    'absolute left-4 transition-all duration-300 pointer-events-none',
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-accent'
                      : 'top-6 text-body-md text-foreground-muted'
                  )}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={cn(
                    'w-full px-4 pt-6 pb-3 bg-background-secondary border rounded-xl',
                    'text-foreground placeholder-transparent resize-none',
                    'transition-all duration-300 outline-none',
                    focusedField === 'message'
                      ? 'border-accent shadow-[0_0_20px_rgba(212,168,83,0.1)]'
                      : 'border-border hover:border-border-hover'
                  )}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className={cn(
                  'relative w-full py-4 rounded-xl font-medium text-body-md',
                  'overflow-hidden transition-all duration-300',
                  status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-accent text-background hover:bg-accent-hover'
                )}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {status === 'sending' && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t.contact.sending}
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4 10L8 14L16 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {t.contact.success}
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {t.contact.error}
                    </motion.span>
                  )}
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {t.contact.send}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente auxiliar para links sociais
function SocialLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-border-hover hover:bg-background-secondary transition-all duration-300 group"
      whileHover={{ x: 5 }}
    >
      <span className="text-foreground-muted group-hover:text-accent transition-colors">
        {icon}
      </span>
      <span className="text-body-md text-foreground-muted group-hover:text-foreground transition-colors">
        {label}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <path
          d="M4 12L12 4M12 4H6M12 4V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  )
}

