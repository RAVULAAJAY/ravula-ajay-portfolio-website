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
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Online Book Store",
      description: "A full-stack e-commerce platform for purchasing and managing books with cart functionality, user authentication, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/RAVULAAJAY",
      image: "/Online-book-store.jpg",
    },
    {
      title: "FarmDirect – Farmer E-Market App",
      description: "Platform connecting farmers directly to buyers with features like crop listing, buyer-farmer chat, and integrated logistics management.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/RAVULAAJAY",
      image: "/Farm-direct.jpg",
    },
    {
      title: "AI-Powered Student Verification System",
      description: "Facial recognition and barcode-based student authentication system for secure campus access and attendance tracking.",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
      github: "https://github.com/RAVULAAJAY",
      image: "/AI-Powered Student Verification System.webp",
    },
    {
      title: "College Event Management App",
      description: "QR-based entry system with event registration, real-time attendance tracking, and automated feedback collection.",
      tech: ["React", "Node.js", "MongoDB", "QR API"],
      github: "https://github.com/RAVULAAJAY",
      image: "/College Event Management App.jpg",
    },
    {
      title: "Smart Campus Store App",
      description: "Marketplace platform for students to buy and sell used items with integrated QR code payment system and user ratings.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/RAVULAAJAY",
      image: "/Smart Campus Store App.jpg",
    },
    {
      title: "Sustainability Image Classification",
      description: "Deep learning CNN model for image classification promoting environmental sustainability awareness and waste management.",
      tech: ["Python", "TensorFlow", "Keras", "CNN"],
      github: "https://github.com/RAVULAAJAY",
      image: "/Sustainability Image Classification.jpg",
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
                        onClick={() => window.open(project.github, '_blank')}
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
