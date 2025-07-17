import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink, MessageCircle, User, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amarrajput2006@gmail.com",
      href: "mailto:amarrajput2006@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mathura, India",
      href: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Phone,
      label: "Available",
      value: "Mon - Fri, 9 AM - 6 PM",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/amarRajputDev",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/amarlodhi",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://amarrajputdev.github.io/MyPortfolio2.0/",
      color: "hover:bg-primary hover:text-primary-foreground"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color}`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{info.label}</p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Follow my work and connect on social platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 p-3 rounded-xl border border-border transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="glass-card border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. Let's discuss your project!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass border-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass border-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Subject</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass border-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      rows={6}
                      required
                      className="glass border-0 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hero-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-card border-0 p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a new website, want to improve an existing one, or have a completely 
              different project in mind, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="hero-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('mailto:amarrajput2006@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-0"
                onClick={() => window.open('https://www.linkedin.com/in/amarlodhi', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}