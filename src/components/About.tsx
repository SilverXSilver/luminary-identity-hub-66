
import { Code, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="data-card h-full p-0 overflow-visible">
              <div className="h-full w-full bg-muted/20 p-8 overflow-hidden">
                <div className="relative w-full h-full border border-border/40">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/40 -m-1"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/40 -m-1"></div>
                  
                  <div className="py-8 px-6 relative">
                    <div className="mb-6 flex space-x-4">
                      <div className="bg-primary/10 p-3 rounded-sm border border-primary/20">
                        <Code size={24} className="text-primary" />
                      </div>
                      <div className="bg-accent/10 p-3 rounded-sm border border-accent/20">
                        <BrainCircuit size={24} className="text-accent" />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl mb-4 relative inline-block">
                      ABOUT ME
                      <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-primary/50"></span>
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-foreground/70">
                        As a dedicated AI student at IMAM ABDULRAHMAN BIN FAISAL UNIVERSITY, 
                        I'm passionate about exploring the possibilities of machine learning,
                        deep learning, and artificial intelligence.
                      </p>
                      
                      <p className="text-foreground/70">
                        My journey in computer science has equipped me with expertise in various 
                        programming languages and tools, with a special focus on Python and its 
                        AI/ML frameworks including TensorFlow, PyTorch, and scikit-learn.
                      </p>
                      
                      <p className="text-foreground/70">
                        I thrive on challenges that require innovative problem-solving and am constantly
                        seeking opportunities to apply my knowledge to real-world applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-muted/40 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/20 -z-10"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <h2 className="section-title">PROFESSIONAL PROFILE</h2>
            
            <div className="space-y-6">
              <div className="data-card">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded-sm border border-primary/20">
                    AI SPECIALIST
                  </span>
                  <span className="text-foreground/60 text-sm">
                    GPA: 4.45 out of 5 – Second Honors Class
                  </span>
                </div>
                
                <p className="text-foreground/70 leading-relaxed">
                  I combine strong theoretical foundations with practical implementation skills in artificial intelligence. 
                  My expertise spans machine learning algorithms, deep learning models, and data analysis. I'm particularly 
                  interested in how AI can be applied to solve complex real-world problems and improve existing systems.
                </p>
                
                <div className="mt-6 pt-6 border-t border-border/30">
                  <h4 className="text-foreground/90 font-medium mb-3">Key Qualifications:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Deep expertise in Python & AI libraries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Machine learning model development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Data preprocessing & feature engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Neural network architecture design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Project management & documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">•</span>
                      <span className="text-foreground/70">Technical writing & presentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
