import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building Intelligent, Real-World Solutions";
  const resumePath = "/Ajay_Resume.pdf";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />
      
      <div className="absolute inset-0 gradient-hero z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark p-1 shadow-elegant ring-4 ring-primary/70 overflow-hidden flex items-center justify-center">
              <img src="/Hero Circle.png" alt="Ravula Ajay" className="w-full h-full rounded-full object-cover object-center" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-primary leading-tight tracking-tight">
            Ravula Ajay
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Aspiring AI & Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground min-h-[2rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-smooth shadow-md hover:shadow-lg group"
              onClick={() => {
                const link = document.createElement("a");
                link.href = resumePath;
                link.download = "Ajay_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => window.location.href = 'mailto:ravulaajay9@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary">B.Tech</div>
              <div>CS (AIML)</div>
            </div>
            <div className="w-px bg-border" />
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div>Projects</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
