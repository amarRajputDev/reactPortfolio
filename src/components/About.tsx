import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Heart, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function About() {
  const highlights = [
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "Love creating digital experiences that make a difference"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering high-quality, scalable solutions"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Always exploring new technologies and best practices"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get to Know{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amar Lodhi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer with a mission to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
                <CardDescription>From student to full-stack developer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Web Developer with 1 year of hands-on experience 
                  building modern web applications. My journey began with curiosity about how 
                  websites work, and it has evolved into a deep passion for creating scalable, 
                  user-friendly applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my BCA from Rajiv Academy for Technology and Management in 
                  Mathura, I've been able to balance academic learning with practical development 
                  experience. I believe in learning by doing, which is why I've worked on various 
                  real-world projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As the team leader for HexaBite, a project developed for Smart India Hackathon 2024, 
                  I've gained valuable experience in project management, team coordination, and 
                  delivering solutions under pressure. I love the challenge of turning ideas into 
                  functional, beautiful applications.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 hero-gradient rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="font-medium">Bachelor of Computer Applications (BCA)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Rajiv Academy for Technology and Management, Mathura</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Currently Pursuing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card border-0 p-6">
              <h3 className="text-xl font-semibold mb-6">What Drives Me</h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card border-0 p-6">
              <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Team Led</div>
                </div>
              </div>
            </Card>

            {/* Fun Fact */}
            <Card className="glass-card border-0 p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-lg font-semibold mb-3">Fun Fact</h3>
              <p className="text-muted-foreground text-sm">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in web development. 
                I believe that continuous learning is the key to staying relevant in this 
                fast-evolving field!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}