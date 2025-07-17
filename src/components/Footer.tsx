import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/amarRajputDev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/amarlodhi",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:amarrajput2006@gmail.com",
      label: "Email"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amar Lodhi
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-card rounded-xl hover:glow transition-smooth"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Resume', href: '#resume' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p className="flex items-center space-x-1">
                <span>© {currentYear} Amar Lodhi. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using React & Tailwind CSS</span>
              </p>
              <p>All rights reserved.</p>
            </div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-6 right-6"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="glass-card border-0 hover:glow transition-smooth"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}