import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Pricing = () => {
  const sectionRef = useScrollReveal();

  const tiers = [
    {
      name: "Starter",
      subtitle: "Hardware Only",
      price: "0",
      period: "/mo",
      description: "Essential monitoring with free app access.",
      features: [
        "Up to 5 devices",
        "Mobile app access",
        "Basic notifications",
        "7-day data history",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      subtitle: "Automation",
      price: "29",
      period: "/mo",
      description: "Advanced logic and cloud storage for power users.",
      features: [
        "Unlimited devices",
        "Advanced automation rules",
        "Cloud data storage",
        "API access",
        "Priority support",
        "Custom dashboards",
      ],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      subtitle: "Full API Access",
      price: "99",
      period: "/mo",
      description: "Complete posting capabilities and raw data access.",
      features: [
        "Everything in Pro",
        "Raw data export",
        "Webhook integrations",
        "Custom endpoints",
        "SLA guarantee",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface/50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-eyebrow uppercase text-muted-foreground mb-4 tracking-widest">
            Pricing
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-body text-muted-foreground">
            Start free, scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`scroll-reveal rounded-3xl p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? "glass border-foreground/20 scale-105 shadow-elevated"
                  : "bg-card border-border hover:border-border/80"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <p className="text-eyebrow uppercase text-muted-foreground tracking-widest mb-2">
                  {tier.subtitle}
                </p>
                <h3 className="text-subheading text-foreground">{tier.name}</h3>
              </div>

              <div className="mb-6">
                <span className="text-display font-extralight text-foreground">${tier.price}</span>
                <span className="text-body text-muted-foreground">{tier.period}</span>
              </div>

              <p className="text-body-sm text-muted-foreground mb-8">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={2} />
                    <span className="text-body-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className={`w-full rounded-full py-6 ${
                  tier.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background"
                } transition-all duration-300`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
