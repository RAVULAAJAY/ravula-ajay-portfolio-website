import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="animate-slide-in-right">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img src="/About Square.jpg" alt="Ravula Ajay" className="w-full h-full object-cover" style={{ objectPosition: 'center' }} />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Ravula Ajay</span>, a passionate B.Tech Computer Science and Engineering student with AIML specialization. I have hands-on experience in building AI-driven and full-stack applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on creating impactful solutions for Education, Agriculture, and Accessibility, leveraging cutting-edge technologies to solve real-world problems.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>DOB: 18-08-2005</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>B.Tech CS (AIML)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-elegant transition-smooth animate-scale-in border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    B.Tech - Computer Science and Engineering (AIML)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    SR University, 2023-2027
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-smooth animate-scale-in border-primary/20" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                  <p className="text-muted-foreground">
                    Tcs Ion
                  </p>
                  <p className="text-muted-foreground">
                    Microsoft Azure Fundamentals
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Salesforce
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
