import { motion } from 'framer-motion'
import { Quote, Star, Users, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Mentor",
      company: "Tech Solutions Inc.",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Amar demonstrated exceptional leadership skills during the Smart India Hackathon. His technical expertise in the MERN stack and ability to coordinate the team was impressive. The project delivery was on time and exceeded expectations.",
      highlight: "Exceptional Leadership"
    },
    {
      name: "Rajesh Kumar",
      role: "Fellow Developer",
      company: "Freelance",
      image: "/api/placeholder/60/60", 
      rating: 5,
      content: "Working with Amar on various projects has been a great experience. His problem-solving approach and clean coding practices are commendable. He's always ready to help and share knowledge with the team.",
      highlight: "Great Team Player"
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      company: "Design Studio",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Amar has an excellent eye for detail when it comes to implementing designs. He ensures that the frontend matches the design perfectly while maintaining optimal performance. His collaboration skills are outstanding.",
      highlight: "Attention to Detail"
    },
    {
      name: "Dr. Anita Verma",
      role: "Academic Supervisor",
      company: "Rajiv Academy",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Amar is one of the most dedicated students I've mentored. His passion for web development and continuous learning attitude sets him apart. He consistently delivers high-quality work and helps other students.",
      highlight: "Dedicated Student"
    },
    {
      name: "Vikash Singh",
      role: "Team Member",
      company: "HexaBite Project",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "Under Amar's leadership, our team successfully completed the HexaBite project for SIH 2024. His clear communication, technical guidance, and motivational approach helped us stay focused and deliver excellence.",
      highlight: "Great Leader"
    },
    {
      name: "Amit Gupta",
      role: "Technical Reviewer",
      company: "CodeReview Platform",
      image: "/api/placeholder/60/60",
      rating: 5,
      content: "I've reviewed several of Amar's projects and I'm consistently impressed by his code quality, documentation, and architectural decisions. He follows best practices and writes maintainable, scalable code.",
      highlight: "High Code Quality"
    }
  ]

  const stats = [
    { label: "Happy Clients", value: "15+", icon: Users },
    { label: "Projects Delivered", value: "5+", icon: MessageCircle },
    { label: "Average Rating", value: "5.0", icon: Star },
    { label: "Team Members Mentored", value: "8+", icon: Users }
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Others{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback from colleagues, mentors, and collaborators I've worked with
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 text-center p-6 hover:glow transition-smooth">
                <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass-card border-0 h-full hover:glow transition-smooth relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {testimonial.highlight}
                  </Badge>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card border-0 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <Quote className="w-12 h-12 mx-auto mb-6 text-primary opacity-60" />
            <h3 className="text-2xl font-bold mb-4">Want to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and bring innovative ideas to life. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 hero-gradient text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}