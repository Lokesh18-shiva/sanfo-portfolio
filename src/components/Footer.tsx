import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Sanfo Solutions. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>in Tamil Nadu, India</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground font-medium">
            Creative Minds. Smart Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
