
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-muted/10 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h2 className="font-display text-xl text-primary">AHMAD ALAKHDHAR</h2>
            <p className="text-foreground/60 text-sm">COMPUTER SCIENCE - ARTIFICIAL INTELLIGENCE (AI)</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:Ahmad.Alakhdhar@hotmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ahmad-alakhdhar-05b5a9350/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
            <a 
              href="tel:000000000" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/20 pt-6 text-center text-foreground/50 text-sm">
          <p>© 2024 Ahmad Alakhdhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
