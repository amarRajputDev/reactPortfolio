import { motion } from 'framer-motion'
import { Download, FileText, Star, Award, Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Resume() {
  const experiences = [
    {
      title: "Team Leader & Full Stack Developer",
      company: "HexaBite Project",
      location: "Smart India Hackathon 2024",
      period: "2024",
      type: "Project Leadership",
      description: "Led a team of 4 developers to create an innovative solution for food wastage and hunger issues. Managed project timeline, coordinated team activities, and developed both frontend and backend components.",
      achievements: [
        "Successfully led team through hackathon competition",
        "Developed full-stack web application with real-time features",
        "Implemented secure authentication and payment systems",
        "Created responsive UI with modern design principles"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2023 - Present",
      type: "Self-Employed",
      description: "Developing various web applications using MERN stack, focusing on creating scalable and user-friendly solutions. Building projects like chat applications, YouTube clone, and real estate platforms.",
      achievements: [
        "Built 5+ full-stack web applications",
        "Gained expertise in React.js, Node.js, and MongoDB",
        "Implemented real-time features using Socket.io",
        "Integrated third-party APIs and services"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Rajiv Academy for Technology and Management",
      location: "Mathura, India",
      period: "Currently Pursuing",
      description: "Comprehensive computer science program covering programming, database management, software engineering, and web technologies.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Object-Oriented Programming"
      ]
    }
  ]

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Self-Taught",
      date: "2023",
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB"]
    },
    {
      title: "Modern JavaScript Development",
      issuer: "Online Courses",
      date: "2023",
      skills: ["ES6+", "Async/Await", "APIs", "DOM Manipulation"]
    },
    {
      title: "Responsive Web Design",
      issuer: "Practice Projects",
      date: "2023",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Mobile-First Design"]
    }
  ]

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Resume</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A detailed overview of my experience, education, and achievements
          </p>
          
          {/* Download Resume Button */}
          <Button
            size="lg"
            className="hero-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 hero-gradient rounded-xl">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-0 relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground/80">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col sm:items-end">
                            <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div>
                          <h4 className="font-medium mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-0 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500"></div>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-base font-medium text-foreground/80">
                            {edu.institution}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div>
                        <h4 className="font-medium mb-3">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <Badge
                              key={course}
                              variant="outline"
                              className="text-xs bg-background/50"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Certifications & Skills Summary */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-0 p-4">
                      <h4 className="font-medium mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer} • {cert.date}</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 p-6">
                <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="font-medium">1+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                    <span className="font-medium">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Technologies</span>
                    <span className="font-medium">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Team Leadership</span>
                    <span className="font-medium">1 Team</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Download Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-lg font-bold mb-4">Get My Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my complete resume with detailed information about my experience and skills.
                </p>
                <Button className="w-full hero-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}