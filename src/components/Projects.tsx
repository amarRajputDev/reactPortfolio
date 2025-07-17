import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar, Users, Code } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Projects() {
  const projects = [
    {
      title: "HexaBite",
      description: "A comprehensive project developed for Smart India Hackathon 2024. Led a team to create an innovative solution for real-world problems using modern web technologies.",
      longDescription: "HexaBite is a modern freelancing platform that connects clients with skilled freelancers for gigs, projects, and long-term collaborations. Built with the MERN stack, it features real-time chat, profile management, gig creation, and a sleek, responsive UI for seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/amarRajputDev",
      liveUrl: "#",
      featured: true,
      status: "Completed",
      teamSize: "4 members",
      role: "Team Leader & Full Stack Developer",
      highlights: ["Smart India Hackathon 2024", "Team Leadership", "Real-time Features"]
    },
    {
  title: "WYPP (What's Your Problem, Partner?)",
  description: "A dedicated social networking platform for college students to connect, share, and support each other through common academic and personal challenges.",
  longDescription: "WYPP is a student-focused social networking site designed to foster connection, communication, and community among college students. The platform allows users to post updates, share academic or personal struggles, comment on posts, and engage with peers in a supportive environment. Built with the MERN stack, WYPP features JWT-based authentication, media uploads via Cloudinary, and a clean, responsive UI tailored for young users.",
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Multer", "Tailwind CSS"],
  githubUrl: "https://github.com/amarRajputDev/WYPP",
  liveUrl: "https://amarrajputdev.github.io/wypp-client/",
  featured: true,
  status: "Completed",
  teamSize: "Solo Project",
  role: "Full Stack Developer",
  highlights: ["College Student Focus", "Post Sharing & Comments", "Secure Auth & Media Uploads"]
},
    {
      title: "Synk Chat",
      description: "A real-time chat application built with modern web technologies, featuring instant messaging, user authentication, and responsive design.",
      longDescription: "Synk Chat provides seamless real-time communication with features like instant messaging, typing indicators, online status, and emoji support. Built with focus on performance and user experience.",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/amarRajputDev",
      liveUrl: "#",
      featured: false,
      status: "Completed",
      teamSize: "Solo",
      role: "Full Stack Developer",
      highlights: ["Real-time Messaging", "Socket.io Integration", "Responsive Design"]
    },
    {
      title: "YouTube Clone",
      description: "A feature-rich YouTube clone with video streaming, search functionality, and responsive design. Demonstrates proficiency in complex UI components and API integration.",
      longDescription: "Complete YouTube clone featuring video streaming, search functionality, channel pages, comment system, and like/dislike features. Integrated with YouTube API for real video content.",
      technologies: ["React.js", "YouTube API", "Tailwind CSS", "Context API"],
      githubUrl: "https://github.com/amarRajputDev",
      liveUrl: "#",
      featured: false,
      status: "Completed",
      teamSize: "Solo",
      role: "Frontend Developer",
      highlights: ["API Integration", "Complex UI", "Video Streaming"]
    },
    {
  title: "Ryde",
  description: "A mobile ride-booking app inspired by Uber, built with React Native for a fast and intuitive user experience.",
  longDescription: "Ryde is a cross-platform ride-hailing application developed using React Native. It enables users to request rides, track drivers in real-time via Mapbox/Google Maps API, and manage bookings with ease. The app features a clean and responsive UI using Tailwind CSS (via NativeWind), secure authentication, and efficient data handling with PostgreSQL. Designed for scalability and smooth real-time interactions, Ryde delivers a seamless experience similar to leading ride-sharing platforms.",
  technologies: ["React Native", "Tailwind CSS (NativeWind)", "Mapbox/Google Maps API", "PostgreSQL", "Node.js", "Express.js", "JWT", "Socket.io"],
  githubUrl: "https://github.com/amarRajputDev/Ryde-Android-App", 
  liveUrl: "#", // Use TestFlight or APK if available
  featured: true,
  status: "In Progress",
  teamSize: "2 members",
  role: "Full Stack Mobile Developer",
  highlights: ["React Native Mobile App", "Real-Time Location Tracking", "PostgreSQL Integration", "Uber-like Experience"]
},
    {
      title: "Real Estate Website",
      description: "A modern real estate platform with property listings, search filters, and user authentication. Features clean UI and smooth user experience.",
      longDescription: "Comprehensive real estate platform with property listings, advanced search filters, user authentication, favorites system, and contact forms. Designed with modern UI/UX principles.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
      githubUrl: "https://github.com/amarRajputDev",
      liveUrl: "#",
      featured: false,
      status: "In Progress",
      teamSize: "Solo",
      role: "Full Stack Developer",
      highlights: ["Property Management", "Search Filters", "Image Upload"]
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, demonstrating skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 h-full group hover:glow transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.longDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.teamSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.role}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-medium mb-3">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </Button>
                    {project.liveUrl !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glass border-0"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-0 h-full group hover:glow transition-smooth">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-background/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs bg-background/50">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 glass border-0"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        </Button>
                        {project.liveUrl !== '#' && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 glass border-0"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Demo</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card border-0 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and exploring innovative technologies. 
              Let's connect and discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hero-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-0"
                asChild
              >
                <a
                  href="https://github.com/amarRajputDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>View All Projects</span>
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
