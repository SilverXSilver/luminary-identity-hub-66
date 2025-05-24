
import React, { useEffect } from 'react';
import { 
  Code, BrainCircuit, Database, LineChart, 
  LayoutGrid, GitBranch, Server, Wrench
} from 'lucide-react';

interface SkillWithProficiency {
  name: string;
  percentage: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
}

interface KnowledgeArea {
  name: string;
  type: 'knowledge';
}

interface SkillSubCategory {
  title: string;
  skills: (SkillWithProficiency | KnowledgeArea)[];
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  subcategories: SkillSubCategory[];
}

const getProficiencyLevel = (percentage: number): 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' => {
  if (percentage >= 95) return 'Professional';
  if (percentage >= 85) return 'Advanced';
  if (percentage >= 70) return 'Intermediate';
  return 'Beginner';
};

const getProficiencyColor = (level: string) => {
  switch (level) {
    case 'Professional': return 'text-green-400';
    case 'Advanced': return 'text-blue-400';
    case 'Intermediate': return 'text-yellow-400';
    case 'Beginner': return 'text-orange-400';
    default: return 'text-gray-400';
  }
};

const ProgressBar: React.FC<{ percentage: number; level: string }> = ({ percentage, level }) => {
  return (
    <div className="w-full bg-muted/30 rounded-full h-2 mt-1">
      <div 
        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
          level === 'Professional' ? 'bg-green-500' :
          level === 'Advanced' ? 'bg-blue-500' :
          level === 'Intermediate' ? 'bg-yellow-500' : 'bg-orange-500'
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const isKnowledgeArea = (skill: SkillWithProficiency | KnowledgeArea): skill is KnowledgeArea => {
  return (skill as KnowledgeArea).type === 'knowledge';
};

const SkillItem: React.FC<{ skill: SkillWithProficiency | KnowledgeArea; isSubSkill?: boolean }> = ({ skill, isSubSkill = false }) => {
  if (isKnowledgeArea(skill)) {
    return (
      <div className={`${isSubSkill ? 'ml-6' : ''} mb-2`}>
        <span className="text-sm text-foreground/80">{skill.name}</span>
        <span className="text-xs text-muted-foreground ml-2">(Knowledge Area)</span>
      </div>
    );
  }

  return (
    <div className={`${isSubSkill ? 'ml-6' : ''} mb-3`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-foreground/90 font-medium">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-foreground/70">{skill.percentage}%</span>
          <span className={`text-xs font-medium ${getProficiencyColor(skill.level)}`}>
            {skill.level}
          </span>
        </div>
      </div>
      <ProgressBar percentage={skill.percentage} level={skill.level} />
    </div>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, subcategories }) => {
  return (
    <div className="data-card h-full group">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-muted/50 rounded-sm flex items-center justify-center text-primary/90">
          {icon}
        </div>
        <h3 className="font-display text-lg text-foreground/90">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {subcategories.map((subcategory, index) => (
          <div key={index}>
            {subcategory.title && (
              <h4 className="text-sm font-medium text-primary/80 mb-3 uppercase tracking-wide">
                {subcategory.title}
              </h4>
            )}
            <div className="space-y-1">
              {subcategory.skills.map((skill, skillIndex) => (
                <SkillItem 
                  key={skillIndex} 
                  skill={skill} 
                  isSubSkill={subcategory.title.includes('Ecosystem')}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  // Programming Languages & Libraries
  const programmingData: SkillSubCategory[] = [
    {
      title: "Python Ecosystem",
      skills: [
        { name: "Python", percentage: 95, level: getProficiencyLevel(95) },
        { name: "Pandas", percentage: 92, level: getProficiencyLevel(92) },
        { name: "NumPy", percentage: 90, level: getProficiencyLevel(90) },
        { name: "TensorFlow", percentage: 90, level: getProficiencyLevel(90) },
        { name: "PyTorch", percentage: 85, level: getProficiencyLevel(85) },
        { name: "scikit-learn", percentage: 88, level: getProficiencyLevel(88) },
      ]
    },
    {
      title: "Other Languages",
      skills: [
        { name: "JavaScript", percentage: 80, level: getProficiencyLevel(80) },
        { name: "Java", percentage: 78, level: getProficiencyLevel(78) },
        { name: "C++", percentage: 75, level: getProficiencyLevel(75) },
        { name: "Kotlin", percentage: 70, level: getProficiencyLevel(70) },
        { name: "Go (Golang)", percentage: 65, level: getProficiencyLevel(65) },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", percentage: 85, level: getProficiencyLevel(85) },
        { name: "CSS", percentage: 82, level: getProficiencyLevel(82) },
      ]
    }
  ];

  // Machine Learning & AI
  const mlData: SkillSubCategory[] = [
    {
      title: "Deep Learning",
      skills: [
        { name: "CNNs", type: 'knowledge' },
        { name: "RNNs", type: 'knowledge' },
        { name: "Transformers", type: 'knowledge' },
        { name: "Model Evaluation", type: 'knowledge' },
        { name: "Hyperparameter Tuning", type: 'knowledge' },
      ]
    },
    {
      title: "Specialized Areas",
      skills: [
        { name: "Reinforcement Learning", type: 'knowledge' },
        { name: "NLP", type: 'knowledge' },
        { name: "Computer Vision", type: 'knowledge' },
      ]
    }
  ];

  // Data Science & Visualization
  const dataData: SkillSubCategory[] = [
    {
      title: "Visualization Tools",
      skills: [
        { name: "Matplotlib", type: 'knowledge' },
        { name: "Seaborn", type: 'knowledge' },
        { name: "Power BI", type: 'knowledge' },
      ]
    },
    {
      title: "Data Processing",
      skills: [
        { name: "Data Preprocessing", type: 'knowledge' },
        { name: "Feature Engineering", type: 'knowledge' },
        { name: "Statistical Analysis", type: 'knowledge' },
        { name: "Data Mining", type: 'knowledge' },
        { name: "ETL Processes", type: 'knowledge' },
      ]
    }
  ];

  // Databases & Storage
  const databaseData: SkillSubCategory[] = [
    {
      title: "",
      skills: [
        { name: "MySQL", percentage: 82, level: getProficiencyLevel(82) },
        { name: "Firebase", type: 'knowledge' },
        { name: "Supabase", type: 'knowledge' },
        { name: "NoSQL", type: 'knowledge' },
        { name: "Data Modeling", type: 'knowledge' },
        { name: "Query Optimization", type: 'knowledge' },
      ]
    }
  ];

  // Software Development Practices
  const devPracticesData: SkillSubCategory[] = [
    {
      title: "",
      skills: [
        { name: "Object-Oriented Programming", type: 'knowledge' },
        { name: "Functional Programming", type: 'knowledge' },
        { name: "API Development", type: 'knowledge' },
        { name: "Test-Driven Development", type: 'knowledge' },
        { name: "Debugging", type: 'knowledge' },
        { name: "Code Optimization", type: 'knowledge' },
      ]
    }
  ];

  // Tools & Technologies
  const toolsData: SkillSubCategory[] = [
    {
      title: "Development Tools",
      skills: [
        { name: "Git", type: 'knowledge' },
        { name: "GitHub", type: 'knowledge' },
        { name: "Docker", type: 'knowledge' },
        { name: "VS Code", type: 'knowledge' },
        { name: "Jupyter Notebooks", type: 'knowledge' },
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Cloud Computing", type: 'knowledge' },
        { name: "PowerShell", type: 'knowledge' },
        { name: "Microsoft Office Suite", type: 'knowledge' },
      ]
    }
  ];

  // Professional Skills
  const professionalData: SkillSubCategory[] = [
    {
      title: "",
      skills: [
        { name: "Project Management", type: 'knowledge' },
        { name: "Technical Writing", type: 'knowledge' },
        { name: "Presentations", type: 'knowledge' },
        { name: "Team Leadership", type: 'knowledge' },
        { name: "Problem Solving", type: 'knowledge' },
        { name: "Time Management", type: 'knowledge' },
        { name: "Communication", type: 'knowledge' },
        { name: "Attention to Detail", type: 'knowledge' },
      ]
    }
  ];

  useEffect(() => {
    // Add staggered animation to progress bars
    const progressBars = document.querySelectorAll('.data-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('[style*="width"]');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.transition = 'width 1s ease-out';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    progressBars.forEach(bar => observer.observe(bar));
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">SKILLS & EXPERTISE</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <SkillCategory
            title="Programming Languages & Libraries"
            icon={<Code size={20} />}
            subcategories={programmingData}
          />
          
          <SkillCategory
            title="Machine Learning & AI"
            icon={<BrainCircuit size={20} />}
            subcategories={mlData}
          />
          
          <SkillCategory
            title="Data Science & Visualization"
            icon={<LineChart size={20} />}
            subcategories={dataData}
          />
          
          <SkillCategory
            title="Databases & Storage"
            icon={<Database size={20} />}
            subcategories={databaseData}
          />
          
          <SkillCategory
            title="Software Development Practices"
            icon={<Wrench size={20} />}
            subcategories={devPracticesData}
          />
          
          <SkillCategory
            title="Tools & Technologies"
            icon={<LayoutGrid size={20} />}
            subcategories={toolsData}
          />
          
          <SkillCategory
            title="Professional Skills"
            icon={<Server size={20} />}
            subcategories={professionalData}
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Professional (95-100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Advanced (85-94%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Intermediate (70-84%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Beginner (60-69%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
