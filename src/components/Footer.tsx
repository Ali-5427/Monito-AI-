

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-[120rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Monito AI</span>
            </div>
            <p className="font-paragraph text-sm text-foreground/60">
              Understand profit per user by analyzing revenue and AI provider costs.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold text-base text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a
                  href="/demo"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-base text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-base text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-paragraph text-sm text-foreground/60">
            © {new Date().getFullYear()} Monito AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
