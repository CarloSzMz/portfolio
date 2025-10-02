"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { ContactFormData } from "@/types"
import { useToast } from "@/hooks/use-toast"
import { translations as t } from "@/lib/translations"

export function useContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [sending, setSending] = useState(false)

  const validateForm = (): string | null => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return "Por favor, completa todos los campos del formulario."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return "Por favor, introduce una dirección de email válida."
    }

    return null
  }

  const validateConfig = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS no está configurado correctamente. Por favor, configura las variables de entorno.")
    }

    return { serviceId, templateId, publicKey }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      // Validate form
      const formError = validateForm()
      if (formError) {
        throw new Error(formError)
      }

      // Validate configuration
      const { serviceId, templateId, publicKey } = validateConfig()

      // Initialize EmailJS
      emailjs.init(publicKey)

      // Send email
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
      })

      toast({
        title: t.contact.form.success,
        variant: "default",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      console.error("Error sending email:", errorMessage)

      let userMessage = t.contact.form.error
      if (errorMessage.includes("EmailJS no está configurado")) {
        userMessage = "El servicio de email no está configurado. Por favor, contacta al administrador."
      } else if (errorMessage.includes("completa todos los campos")) {
        userMessage = errorMessage
      } else if (errorMessage.includes("email válida")) {
        userMessage = errorMessage
      }

      toast({
        title: userMessage,
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  return {
    formData,
    setFormData,
    sending,
    handleSubmit,
  }
}
