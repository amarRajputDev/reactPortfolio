import { motion } from 'framer-motion'
import { Code, Server, Database, Palette, Cloud, GitBranch, Smartphone, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust and scalable server-side applications",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database & Cloud",
      description: "Managing data and cloud infrastructure",
      skills: ["MongoDB", "Firebase", "Cloudinary", "AWS Basics", "Database Design"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Palette,
      title: "UI/UX & Design",
      description: "Crafting beautiful and user-friendly designs",
      skills: ["Figma", "Responsive Design", "User Experience", "Design Systems"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      description: "Version control and development workflow",
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Vite"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Zap,
      title: "State Management",
      description: "Managing application state efficiently",
      skills: ["Zustand", "Context API", "Redux Toolkit", "React Query"],
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const techStack = [
    { name: "React.js", level: 90, color: "bg-blue-500" },
    { name: "React Native", level: 85, color: "bg-blue-600" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "MongoDB", level: 80, color: "bg-green-600" },
    { name: "Express.js", level: 85, color: "bg-gray-600" },
    { name: "Next.js", level: 75, color: "bg-black" },
    { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
    { name: "JavaScript", level: 88, color: "bg-yellow-500" },
    { name: "TypeScript", level: 70, color: "bg-blue-600" },
    { name: "Zustand", level: 80, color: "bg-orange-500" },
    { name: "Git", level: 85, color: "bg-red-500" }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Technical Skills</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 h-full hover:glow transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack Proficiency</h3>
          <Card className="glass-card border-0 p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ delay: index * 0.05, duration: 1 }}
                      viewport={{ once: true }}
                      className={`h-full ${tech.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Learning Journey</h3>
          <Card className="glass-card border-0 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in web development started with HTML and CSS, gradually expanding to 
                JavaScript and React. The MERN stack became my playground where I learned to 
                build full-stack applications. Each project taught me something new, and I 
                continue to explore emerging technologies like Next.js and advanced state 
                management patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-background/50">Currently Learning: TypeScript Advanced Patterns</Badge>
                <Badge variant="outline" className="bg-background/50">Next: Docker & DevOps</Badge>
                <Badge variant="outline" className="bg-background/50">Interested in: AI/ML Integration</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}