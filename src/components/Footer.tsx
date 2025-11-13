import { Button } from "@/components/ui/button";
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Ravula Ajay
              </h3>
              <p className="text-muted-foreground mb-4">
                Aspiring AI & Full Stack Developer building intelligent solutions for real-world problems.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/ravula-ajay-42612a288/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/RAVULAAJAY', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'mailto:ravulaajay9@gmail.com'}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['home', 'about', 'skills', 'projects'].map((section) => (
                  <li key={section}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {['achievements', 'contact'].map((section) => (
                  <li key={section}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-primary"
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Ravula Ajay. All rights reserved.
            </p>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
