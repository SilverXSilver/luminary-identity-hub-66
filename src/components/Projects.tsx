
import { Calendar, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, date, description, image, demoLink, codeLink 
}) => {
  return (
    <div className="project-card group">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
      </div>
      
      <h3 className="project-title">{title}</h3>
      
      <div className="project-date flex items-center gap-2">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      
      <p className="project-description">
        {description}
      </p>
      
      <div className="mt-auto flex gap-3">
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sharp-button"
          >
            <ExternalLink size={14} className="mr-2" />
            <span>View Demo</span>
          </a>
        )}
        
        {codeLink && (
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sharp-button"
          >
            <Github size={14} className="mr-2" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 diagonal-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Examiy"
            date="Jun 2024 - Present"
            description="Implemented Examiy, an AI-powered Python system, generating tailored exam papers from user-provided materials, thereby optimizing both instructor workflow and student learning outcomes through complete content coverage."
            image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            demoLink="#demo-placeholder"
            codeLink="#code-placeholder"
          />
          
          <ProjectCard
            title="Pixilify"
            date="Jan 2025 - Present"
            description="Developed Pixilify, an AI-driven image processing application, enabling interactive student learning through the practical application and detailed explanation of various image filtering techniques."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            demoLink="#demo-placeholder"
            codeLink="#code-placeholder"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foreground/60 text-sm mb-6">
            More projects coming soon. Contact me for collaboration opportunities!
          </p>
          
          <div className="inline-block p-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-sm">
            <a 
              href="mailto:Ahmad.Alakhdhar@hotmail.com" 
              className="block bg-muted/80 hover:bg-muted/60 px-6 py-2 transition-colors"
            >
              <span className="text-foreground/90">Get in touch for collaboration</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
