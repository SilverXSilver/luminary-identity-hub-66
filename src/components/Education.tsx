
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">EDUCATION</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="data-card h-full">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <div className="w-12 h-12 bg-muted/50 rounded-sm flex items-center justify-center text-primary">
                  <GraduationCap size={24} />
                </div>
                
                <div>
                  <h3 className="font-display text-xl text-foreground/90">BACHELOR OF COMPUTER SCIENCE</h3>
                  <p className="text-primary/80">Artificial Intelligence Specialization</p>
                </div>
              </div>
              
              <div className="space-y-4 text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent/80" />
                  <span>IMAM ABDULRAHMAN BIN FAISAL UNIVERSITY</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent/80" />
                  <span>September 2021 – Present</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-accent/80" />
                  <span>GPA: 4.45 out of 5 – Second Honors Class</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/30">
                <h4 className="font-medium text-foreground/90 mb-3">Key Coursework:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Machine Learning & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Neural Networks & Deep Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Computer Vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-mono mt-0.5">•</span>
                    <span className="text-foreground/70">Database Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="data-card">
                <h3 className="font-display text-xl text-foreground/90 mb-4">ACADEMIC JOURNEY</h3>
                
                <div className="space-y-6 text-foreground/70">
                  <p>
                    My academic journey at IMAM ABDULRAHMAN BIN FAISAL UNIVERSITY has been focused on 
                    developing deep expertise in artificial intelligence and its applications. 
                    Maintaining a GPA of 4.45 out of 5, I've consistently demonstrated excellence 
                    in my coursework and research projects.
                  </p>
                  
                  <p>
                    Through rigorous coursework in machine learning, deep learning, computer vision, 
                    and natural language processing, I've built a strong foundation in both the theoretical 
                    aspects and practical applications of AI. My specialized studies have equipped me with 
                    the skills to design, implement, and evaluate AI systems that solve real-world problems.
                  </p>
                  
                  <p>
                    Beyond the classroom, I've participated in research initiatives and collaborative 
                    projects that have enhanced my understanding of cutting-edge AI technologies and 
                    their potential impact across various industries.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm border border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-display text-xl">AI</span>
                    </div>
                    <span className="text-foreground/80">Artificial Intelligence Focus</span>
                  </div>
                  
                  <div className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm">
                    Expected Graduation: 2025
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-primary/10 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-card/50 -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
