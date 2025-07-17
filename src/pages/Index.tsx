import { ThemeProvider } from '@/hooks/use-theme'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Resume } from '@/components/Resume'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen w-screen overflow-hidden bg-background text-foreground custom-scrollbar">
        <Navbar />
        <main className=' '>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
