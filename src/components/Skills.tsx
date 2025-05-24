
import React, { useEffect } from 'react';
import { 
  Code, BrainCircuit, Database, LineChart, 
  LayoutGrid, GitBranch, Server, Wrench
} from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  proficiencyLevel: 'Professional' | 'Advanced' | 'Intermediate';
  skills: Skill[];
}

const getProficiencyColor = (level: string) => {
  switch (level) {
    case 'Professional': return 'text-green-400';
    case 'Advanced': return 'text-blue-400';
    case 'Intermediate': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
};

const getProficiencyBadgeColor = (level: string) => {
  switch (level) {
    case 'Professional': return 'bg-green-500/20 border-green-500/30 text-green-400';
    case 'Advanced': return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
    case 'Intermediate': return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
    default: return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
  }
};

const SkillCategoryComponent: React.FC<SkillCategory> = ({ title, icon, proficiencyLevel, skills }) => {
  return (
    <div className="data-card h-full group">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-muted/50 rounded-sm flex items-center justify-center text-primary/90">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg text-foreground/90">{title}</h3>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mt-2 ${getProficiencyBadgeColor(proficiencyLevel)}`}>
            {proficiencyLevel}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 p-2 rounded-sm hover:bg-muted/20 transition-colors duration-200">
            <div className="w-2 h-2 rounded-full bg-primary/60"></div>
            <span className="text-sm text-foreground/80">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages & Libraries",
      icon: <Code size={20} />,
      proficiencyLevel: "Professional",
      skills: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "scikit-learn" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "C++" },
        { name: "Kotlin" },
        { name: "Go (Golang)" },
        { name: "HTML" },
        { name: "CSS" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit size={20} />,
      proficiencyLevel: "Professional",
      skills: [
        { name: "Deep Learning" },
        { name: "CNNs" },
        { name: "RNNs" },
        { name: "Transformers" },
        { name: "Reinforcement Learning" },
        { name: "NLP" },
        { name: "Computer Vision" },
        { name: "Model Evaluation" },
        { name: "Hyperparameter Tuning" }
      ]
    },
    {
      title: "Data Science & Visualization",
      icon: <LineChart size={20} />,
      proficiencyLevel: "Professional",
      skills: [
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { name: "Power BI" },
        { name: "Data Preprocessing" },
        { name: "Feature Engineering" },
        { name: "Statistical Analysis" },
        { name: "Data Mining" },
        { name: "ETL Processes" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database size={20} />,
      proficiencyLevel: "Advanced",
      skills: [
        { name: "MySQL" },
        { name: "Firebase" },
        { name: "Supabase" },
        { name: "NoSQL" },
        { name: "Data Modeling" },
        { name: "Query Optimization" }
      ]
    },
    {
      title: "Software Development Practices",
      icon: <Wrench size={20} />,
      proficiencyLevel: "Intermediate",
      skills: [
        { name: "Object-Oriented Programming" },
        { name: "Functional Programming" },
        { name: "API Development" },
        { name: "Test-Driven Development" },
        { name: "Debugging" },
        { name: "Code Optimization" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <LayoutGrid size={20} />,
      proficiencyLevel: "Intermediate",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Docker" },
        { name: "VS Code" },
        { name: "Jupyter Notebooks" },
        { name: "Cloud Computing" },
        { name: "PowerShell" },
        { name: "Microsoft Office Suite" }
      ]
    },
    {
      title: "Professional Skills",
      icon: <Server size={20} />,
      proficiencyLevel: "Advanced",
      skills: [
        { name: "Project Management" },
        { name: "Technical Writing" },
        { name: "Presentations" },
        { name: "Team Leadership" },
        { name: "Problem Solving" },
        { name: "Time Management" },
        { name: "Communication" },
        { name: "Attention to Detail" }
      ]
    }
  ];

  useEffect(() => {
    // Add staggered animation to skill cards
    const skillCards = document.querySelectorAll('.data-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    skillCards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">SKILLS & EXPERTISE</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategoryComponent
              key={index}
              title={category.title}
              icon={category.icon}
              proficiencyLevel={category.proficiencyLevel}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
