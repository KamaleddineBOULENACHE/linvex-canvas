import { Smartphone, Cloud, Monitor, LayoutDashboard } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const UniversalIntegration = () => {
  const sectionRef = useScrollReveal();

  const endpoints = [
    { icon: Smartphone, label: "Mobile", angle: -60 },
    { icon: Cloud, label: "Cloud", angle: -20 },
    { icon: Monitor, label: "Desktop", angle: 20 },
    { icon: LayoutDashboard, label: "Dashboard", angle: 60 },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface/50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-eyebrow uppercase text-muted-foreground mb-4 tracking-widest">
            Integration
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground mb-4">
            Your Data, Everywhere.
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Linvex is platform agnostic. Post telemetry to your custom dashboard, 
            trigger webhooks, or sync with consumer apps instantly.
          </p>
        </div>

        {/* Integration diagram */}
        <div className="relative max-w-3xl mx-auto h-80 md:h-96 scroll-reveal">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-foreground flex items-center justify-center shadow-elevated">
              <span className="text-background text-body-sm md:text-body font-medium">LINVEX</span>
            </div>
          </div>

          {/* Animated lines and endpoints */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
            {endpoints.map((endpoint, index) => {
              const centerX = 200;
              const centerY = 160;
              const radius = 130;
              const angleRad = (endpoint.angle * Math.PI) / 180;
              const endX = centerX + Math.cos(angleRad) * radius;
              const endY = centerY + Math.sin(angleRad) * radius;

              return (
                <g key={index}>
                  {/* Dashed line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={endX}
                    y2={endY}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border dashed-line"
                    strokeDasharray="5,5"
                  />
                  {/* Data dots traveling along the line */}
                  <circle
                    cx={centerX + Math.cos(angleRad) * 50}
                    cy={centerY + Math.sin(angleRad) * 50}
                    r="3"
                    className="fill-foreground data-dot"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                  <circle
                    cx={centerX + Math.cos(angleRad) * 90}
                    cy={centerY + Math.sin(angleRad) * 90}
                    r="3"
                    className="fill-foreground data-dot"
                    style={{ animationDelay: `${index * 0.3 + 0.5}s` }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Endpoint icons */}
          {endpoints.map((endpoint, index) => {
            const radius = 140;
            const angleRad = (endpoint.angle * Math.PI) / 180;
            const x = 50 + Math.cos(angleRad) * (radius / 2);
            const y = 50 + Math.sin(angleRad) * (radius / 2);

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center gap-2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-elegant">
                  <endpoint.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <span className="text-body-sm text-muted-foreground">{endpoint.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniversalIntegration;
