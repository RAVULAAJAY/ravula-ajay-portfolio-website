import { Card } from "@/components/ui/card";
import { Award, Trophy, Users, Briefcase } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "AWS Academy Cloud Foundations",
      description: "Completed AWS Academy Cloud Virtual Internship through EduSkills & AICTE",
      date: "2024",
    },
    {
      icon: Trophy,
      title: "EduNet Foundation",
      description: "Completed a 4-week virtual internship in the Artificial Intelligence and Machine Learning (AI & ML) domain, gaining practical experience and industry exposure.",
      date: "Nov 2025",
    },
    {
      icon: Users,
      title: "University Recognition",
      description: "Received recognition from my university for securing the top position in both 2.1 and 2.2 semesters, demonstrating consistent academic excellence and dedication to learning.",
      date: "2024",
    },
    {
      icon: Briefcase,
      title: "AICTE Virtual Internship",
      description: "Successfully completed the GEN-AI Virtual Internship (Jan–Mar 2025) under AICTE and EduSkills. Certificate ID: 0b1b032a67183119f6f92f54e887d82d",
      date: "2025",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones and accomplishments throughout my journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card
                    className={`flex-1 p-6 hover:shadow-elegant transition-smooth border-primary/20 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
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

                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-md shrink-0 z-10 animate-pulse-glow" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
