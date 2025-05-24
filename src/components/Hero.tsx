
import { ArrowDown, Mail, Linkedin, Sparkles } from 'lucide-react';

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
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-muted/40 to-muted/20 px-4 py-2 text-xs font-mono text-primary/90 border border-primary/30 mb-6 rounded-sm backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" />
              COMPUTER SCIENCE - ARTIFICIAL INTELLIGENCE (AI)
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-foreground">
              AHMAD <span className="text-primary text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ALAKHDHAR</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed">
              Building Intelligent Systems <span className="text-primary animate-pulse">|</span> AI Enthusiast <span className="text-accent animate-pulse">|</span> Future Innovator
            </h2>
            
            <p className="text-foreground/70 max-w-2xl leading-relaxed text-lg">
              Highly motivated computer science - AI student seeking a training employment opportunity 
              within technical field to apply my knowledge in artificial intelligence, contributing to 
              impactful projects and gaining valuable experience in the field.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="mailto:Ahmad.Alakhdhar@hotmail.com" 
                className="sharp-button group"
                aria-label="Email"
              >
                <Mail size={18} className="mr-3" />
                <span>Contact Me</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ahmad-alakhdhar-05b5a9350/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sharp-button group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: "300ms"}}>
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 mx-auto bg-gradient-to-br from-muted/40 to-muted/20 
                          border border-primary/40 flex items-center justify-center rounded-sm overflow-hidden
                          animate-float shadow-2xl shadow-primary/20 backdrop-blur-sm group
                          hover:shadow-3xl hover:shadow-primary/30 transition-all duration-500">
                <div className="text-2xl font-display text-foreground/30 z-10">
                  [HEADSHOT PLACEHOLDER]
                </div>
                
                {/* Animated border overlay */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Angular corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-500"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-500"></div>
                
                {/* Glowing orb effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-t-2 border-r-2 border-primary/40 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-2 border-l-2 border-accent/40 animate-pulse" style={{animationDelay: "1s"}}></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse-glow"></div>
              <div className="absolute bottom-1/4 -left-3 w-3 h-12 bg-gradient-to-t from-primary to-accent animate-pulse" style={{animationDelay: "0.5s"}}></div>
              
              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full animate-pulse"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ArrowDown size={28} className="chevron" />
      </div>
    </section>
  );
};

export default Hero;
