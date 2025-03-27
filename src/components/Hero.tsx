
import { ArrowDown, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(16,16,24,0.95) 0%, rgba(25,29,43,0.9) 50%, rgba(11,16,30,0.8) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="inline-block bg-muted/30 px-3 py-1 text-xs font-mono text-primary/90 border border-primary/20 mb-4">
              COMPUTER SCIENCE - ARTIFICIAL INTELLIGENCE (AI)
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
              AHMAD <span className="text-primary text-glow">ALAKHDHAR</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-foreground/80">
              Building Intelligent Systems <span className="text-primary">|</span> AI Enthusiast <span className="text-primary">|</span> Future Innovator
            </h2>
            
            <p className="text-foreground/70 max-w-2xl leading-relaxed">
              Highly motivated computer science - AI student seeking a training employment opportunity 
              within technical field to apply my knowledge in artificial intelligence, contributing to 
              impactful projects and gaining valuable experience in the field.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="mailto:Ahmad.Alakhdhar@hotmail.com" 
                className="sharp-button group"
                aria-label="Email"
              >
                <Mail size={16} className="mr-2" />
                <span>Contact Me</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ahmad-alakhdhar-05b5a9350/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sharp-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: "200ms"}}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-muted/30 border border-primary/30 
                          flex items-center justify-center rounded-sm overflow-hidden
                          animate-float shadow-lg shadow-primary/10">
                <div className="text-xl font-display text-foreground/30">
                  [HEADSHOT PLACEHOLDER]
                </div>
                <div className="absolute inset-0 border border-primary/10"></div>
                {/* Angular corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/50"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/50"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50"></div>
              </div>
              
              {/* Tech-inspired decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-primary/30"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-accent"></div>
              <div className="absolute bottom-1/4 -left-2 w-2 h-8 bg-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ArrowDown size={24} className="text-primary/70 chevron" />
      </div>
    </section>
  );
};

export default Hero;
