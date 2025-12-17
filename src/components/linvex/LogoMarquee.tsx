import { Home, Cloud, Wifi, Radio, Cpu } from "lucide-react";

const LogoMarquee = () => {
  const partners = [
    { name: "Google Home", icon: Home },
    { name: "Home Assistant", icon: Home },
    { name: "AWS IoT", icon: Cloud },
    { name: "Zigbee", icon: Wifi },
    { name: "Matter", icon: Radio },
    { name: "LoRaWAN", icon: Wifi },
    { name: "MQTT", icon: Cpu },
    { name: "Thread", icon: Radio },
  ];

  return (
    <section className="py-16 overflow-hidden border-y border-border bg-surface/50">
      <div className="blur-fade-left">
        <div className="flex marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-12 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <partner.icon className="w-5 h-5 text-foreground" strokeWidth={1} />
              <span className="text-body-sm text-foreground whitespace-nowrap font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
