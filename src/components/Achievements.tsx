
import { Award, Users } from 'lucide-react';

interface AchievementProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

const AchievementItem: React.FC<AchievementProps> = ({
  icon, title, date, description
}) => {
  return (
    <div className="achievement-item">
      <div className="achievement-icon">
        {icon}
      </div>
      
      <div className="achievement-content">
        <h3 className="achievement-title">{title}</h3>
        <p className="achievement-date">{date}</p>
        <p className="achievement-description">{description}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">ACHIEVEMENTS</h2>
        
        <div className="max-w-4xl mx-auto">
          <AchievementItem
            icon={<Award size={24} />}
            title="Winner, Advancement in Artificial Intelligence Specialization – KAUST Academy"
            date="Nov 2024 - Mar 2025"
            description="Selected as one of the top 100 students from around the country to participate in Advanced program in the AI specialization held by KAUST earning Certificate, and demonstrating mastery of advanced AI concepts."
          />
          
          <AchievementItem
            icon={<Users size={24} />}
            title="Member of Programming Club – Imam Abdulrahman Bin Faisal University"
            date="Sep 2023 - Feb 2024"
            description="Collaborated effectively with team members in the Programming Club to complete key tasks, contributing to the club's success and earning a certificate of recognition for dedicated service."
          />
          
          <div className="data-card mt-12">
            <h3 className="font-display text-lg text-foreground/90 mb-4">REFERENCES</h3>
            <p className="text-foreground/70">
              Professional references are available upon request. Please contact me via email or LinkedIn for reference information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
