"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Send } from "lucide-react"

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectSummary: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create email content
      const emailBody = `
New Quote Request from V M Constructions Website

Name: ${formData.name}
Phone: ${formData.phone}
Project Summary: ${formData.projectSummary}

Submitted from: ${window.location.href}
Date: ${new Date().toLocaleString()}
      `.trim()

      // Create mailto link
      const mailtoLink = `mailto:vmconstructions@gmail.com?subject=Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      setSubmitStatus("success")
      setTimeout(() => {
        onClose()
        setFormData({ name: "", phone: "", projectSummary: "" })
        setSubmitStatus("idle")
      }, 2000)
      
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = "Hello, I need a quotation for my construction project."
    const whatsappUrl = `https://wa.me/919019407040?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get Quote</h2>
            <p className="text-slate-600 text-sm">V M Constructions</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="projectSummary" className="block text-sm font-semibold text-slate-700 mb-2">
              Project Summary *
            </label>
            <Textarea
              id="projectSummary"
              name="projectSummary"
              required
              value={formData.projectSummary}
              onChange={handleInputChange}
              placeholder="Describe your construction project requirements..."
              rows={4}
              className="w-full resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm font-medium">
                ✓ Email client opened! Please send the email to complete your quote request.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-800 text-sm font-medium">
                ✗ Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Quote Request"}
            </Button>

            <Button
              type="button"
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500">
              By submitting this form, you agree to be contacted by V M Constructions regarding your project.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
