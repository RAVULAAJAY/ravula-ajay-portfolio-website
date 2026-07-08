import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  isPrivate?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "FarmDirect – Farmer E-Market App",
      description: "Platform connecting farmers directly to buyers with features like crop listing, buyer-farmer chat, and integrated logistics management.",
      tech: ["React", "TypeScript", "Node.js", "Firebase", "Socket.IO", "Tailwind CSS"],
      github: "https://github.com/RAVULAAJAY/Farm-Direct.git",
      image: "/Farm Direct.png",
      isPrivate: true,
    },
    {
      title: "Face Recognition Attendance System",
      description: "Facial recognition-based attendance and student verification system for secure campus access and automated attendance tracking.",
      tech: ["Python", "OpenCV", "Tkinter", "MySQL", "NumPy", "Pillow", "LBPH"],
      github: "https://github.com/RAVULAAJAY/Face-Recognition-Attendance-System.git",
      image: "/Face Recognition Attendance System.png",
    },
    {
      title: "Digital Farm Management Portal",
      description: "A digital livestock management system that enables farmers, veterinarians, laboratories, and regulators to monitor treatments, compliance, and animal health efficiently.",
      tech: ["React", "TypeScript", "TanStack", "Tailwind CSS", "Firebase"],
      github: "https://github.com/RAVULAAJAY/Digital-Farm-Management-Portal.git",
      image: "/The Digital Farm Management Portal.png",
    },
    {
      title: "Online Book Store",
      description: "A full-stack e-commerce platform for purchasing and managing books with cart functionality, user authentication, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/RAVULAAJAY/online-book-store.git",
      image: "/online book store.png",
    },
    {
      title: "Hire-Me",
      description: "An AI-powered ATS Resume Analyzer that evaluates resumes against job descriptions, generates ATS scores, identifies skill gaps, and provides personalized improvement recommendations.",
      tech: ["React", "Node.js", "Express.js", "Tailwind CSS", "OpenAI"],
      github: "https://github.com/RAVULAAJAY/Hire-Me.git",
      image: "/Hire Me.png",
    },
    {
      title: "Real-Time Object Detection",
      description: "Real-time computer vision application that detects and classifies objects from webcam feeds using YOLOv10, OpenCV, and Supervision with live annotations and confidence scoring.",
      tech: ["Python", "YOLOv10", "OpenCV", "Ultralytics", "Supervision", "Typer"],
      github: "https://github.com/RAVULAAJAY/Real-Time-Object-Detection.git",
      image: "/Real-Time Object Detection.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions across education, agriculture, and accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 hover:shadow-elegant transition-smooth animate-scale-in border-primary/20 hover:border-primary/40 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center mb-4 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl">🚀</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => {
                          if (project.isPrivate) {
                            alert('This repository is private. Please contact admin to view the code.');
                          } else {
                            window.open(project.github, '_blank');
                          }
                        }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
