import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed",
        description: "You'll receive updates from Linvex.",
      });
      setEmail("");
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Products", "Pricing", "API Docs"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Community", "Status", "Security"],
    },
  ];

  return (
    <footer className="bg-foreground text-background pt-40 pb-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Logo and subscribe */}
          <div>
            <h2 className="text-display-sm font-extralight text-background mb-8">
              LINVEX
            </h2>
            <p className="text-body text-background/60 max-w-sm mb-8">
              Intelligence, Embedded. Building the future of connected spaces.
            </p>
            
            {/* Terminal-style subscribe */}
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center bg-background/10 rounded-full px-6 py-4 max-w-md">
                <span className="text-background/40 mr-2">&gt;</span>
                <input
                  type="email"
                  placeholder="Enter your email to connect..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-body text-background placeholder:text-background/40 focus:outline-none"
                />
                <button type="submit" className="text-background/60 hover:text-background transition-colors">
                  ↵
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Links */}
          <div className="grid grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-eyebrow uppercase text-background/40 tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-body-sm text-background/60 hover:text-background transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-background/40">
            © 2024 Linvex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-body-sm text-background/40 hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="text-body-sm text-background/40 hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="text-body-sm text-background/40 hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
