
import React, { useEffect } from 'react';
import { 
  Code, BrainCircuit, Database, LineChart, 
  LayoutGrid, GitBranch, LucideIcon, Server
} from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level?: number;
  }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="data-card h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-muted/50 rounded-sm flex items-center justify-center text-primary/90">
          {icon}
        </div>
        <h3 className="font-display text-lg text-foreground/90">{title}</h3>
      </div>
      
      <div className="flex flex-wrap -m-1">
        {skills.map((skill, index) => (
          <div key={index} className="techskill-tag">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProgressSkillProps {
  skill: string;
  level: number;
  index: number;
}

const ProgressSkill: React.FC<ProgressSkillProps> = ({ skill, level, index }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress') as HTMLElement;
            if (progress) {
              progress.style.setProperty('--progress-width', `${level}%`);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`skill-${index}`);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [level, index]);

  return (
    <div id={`skill-${index}`} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-foreground/80">{skill}</span>
        <span className="text-xs text-primary/70">{level}%</span>
      </div>
      <div className="skill-progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: "Python", level: 95 },
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "scikit-learn", level: 88 },
    { name: "Pandas", level: 92 },
    { name: "numpy", level: 90 },
    { name: "MySQL", level: 82 },
    { name: "C++", level: 75 },
    { name: "Java", level: 78 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 82 },
    { name: "Kotlin", level: 70 },
    { name: "Go (Golang)", level: 65 },
  ];
  
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-diagonal-lines opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">SKILLS & EXPERTISE</h2>
        
        <div className="mb-16">
          <h3 className="font-display text-xl mb-6 text-foreground/90">Programming Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {programmingSkills.map((skill, index) => (
              <ProgressSkill 
                key={index}
                skill={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Machine Learning & AI"
            icon={<BrainCircuit size={20} />}
            skills={[
              { name: "Deep Learning" },
              { name: "CNNs" },
              { name: "RNNs" },
              { name: "Transformers" },
              { name: "Reinforcement Learning" },
              { name: "NLP" },
              { name: "Computer Vision" },
              { name: "Model Evaluation" },
              { name: "Hyperparameter Tuning" },
            ]}
          />
          
          <SkillCategory
            title="Data Science & Visualization"
            icon={<LineChart size={20} />}
            skills={[
              { name: "Matplotlib" },
              { name: "Seaborn" },
              { name: "Power BI" },
              { name: "Data Preprocessing" },
              { name: "Feature Engineering" },
              { name: "Statistical Analysis" },
              { name: "Data Mining" },
              { name: "ETL Processes" },
            ]}
          />
          
          <SkillCategory
            title="Databases & Storage"
            icon={<Database size={20} />}
            skills={[
              { name: "MySQL" },
              { name: "Firebase" },
              { name: "Supabase" },
              { name: "NoSQL" },
              { name: "Data Modeling" },
              { name: "Query Optimization" },
            ]}
          />
          
          <SkillCategory
            title="Software Development"
            icon={<Code size={20} />}
            skills={[
              { name: "Object-Oriented Programming" },
              { name: "Functional Programming" },
              { name: "API Development" },
              { name: "Test-Driven Development" },
              { name: "Debugging" },
              { name: "Code Optimization" },
            ]}
          />
          
          <SkillCategory
            title="Tools & Technologies"
            icon={<LayoutGrid size={20} />}
            skills={[
              { name: "Git" },
              { name: "GitHub" },
              { name: "Cloud Computing" },
              { name: "Docker" },
              { name: "Jupyter Notebooks" },
              { name: "VS Code" },
              { name: "PowerShell" },
              { name: "Microsoft Office Suite" },
            ]}
          />
          
          <SkillCategory
            title="Professional Skills"
            icon={<Server size={20} />}
            skills={[
              { name: "Project Management" },
              { name: "Technical Writing" },
              { name: "Presentations" },
              { name: "Team Leadership" },
              { name: "Problem Solving" },
              { name: "Time Management" },
              { name: "Communication" },
              { name: "Attention to Detail" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
