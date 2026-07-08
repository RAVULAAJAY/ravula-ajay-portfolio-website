import { Card } from "@/components/ui/card";
import { Award, Trophy, Users, Briefcase } from "lucide-react";

const Achievements = () => {
  const internships = [
    {
      icon: Briefcase,
      title: "Edunet Foundation (AICTE & Shell India)",
      description: "Cleaned and analyzed structured datasets using Pandas and NumPy to support machine learning workflows. Built data visualizations to help summarize trends for project reporting, with attention to ethical data handling practices.",
      date: "Oct – Nov 2025",
    },
    {
      icon: Briefcase,
      title: "Generative AI Virtual Internship",
      description: "Built prototype applications using OpenAI APIs to explore LLM-based automation and decision-support use cases. Experimented with transformer-based models to understand prompt design and pipeline integration.",
      date: "Jan – Mar 2025",
    },
    {
      icon: Briefcase,
      title: "AWS Cloud Virtual Internship (EduSkills – AICTE)",
      description: "Practiced deploying and configuring cloud infrastructure using core AWS services, including IAM and VPC setup. Gained hands-on exposure to cloud architecture, security fundamentals, and basic cost-monitoring practices.",
      date: "Oct – Dec 2024",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Built FarmDirect",
      description: "Built FarmDirect, an end-to-end full-stack marketplace application that streamlines direct interactions between farmers and buyers through a digital platform.",
      date: "2024-2025",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Achieved academic excellence by consistently ranking among the top-performing students during the 2nd and 3rd years of the B.Tech program and receiving university recognition.",
      date: "2024-2025",
    },
    {
      icon: Users,
      title: "Hackathons & Competitions",
      description: "Actively participated in hackathons, coding competitions, and innovation challenges, demonstrating strong problem-solving, teamwork, and software development skills.",
      date: "2024-2025",
    },
  ];

  return (
    <>
      {/* Internships Section */}
      <section id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Internships</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              {internships.map((internship, index) => (
                <Card
                  key={internship.title}
                  className="p-6 hover:shadow-elegant transition-smooth border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <internship.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                      <p className="text-muted-foreground mb-2">{internship.description}</p>
                      <span className="text-sm text-primary font-medium">{internship.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="p-6 hover:shadow-elegant transition-smooth border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground mb-2">{achievement.description}</p>
                      <span className="text-sm text-primary font-medium">{achievement.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
