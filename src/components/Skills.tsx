import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 83 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "AI/ML & Cloud",
      skills: [
        { name: "TensorFlow", level: 82 },
        { name: "OpenCV", level: 80 },
        { name: "AWS", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning AI/ML, full-stack development, and cloud technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="p-6 hover:shadow-elegant transition-smooth animate-scale-in border-primary/20"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["GitHub", "VS Code", "Postman", "scikit-learn"].map((tool, index) => (
              <Card
                key={tool}
                className="p-4 text-center hover:shadow-md transition-smooth animate-fade-in border-primary/10 hover:border-primary/30"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <p className="font-medium text-muted-foreground">{tool}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
