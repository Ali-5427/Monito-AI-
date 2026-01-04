import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Monito AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <a
              href="/app"
              className="bg-primary text-primary-foreground py-3 px-6 rounded-md font-paragraph font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-paragraph text-sm text-foreground/80 hover:text-primary transition-colors text-left"
            >
              FAQ
            </button>
            <a
              href="/app"
              className="bg-primary text-primary-foreground py-3 px-6 rounded-md font-paragraph font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
