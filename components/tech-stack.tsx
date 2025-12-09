import { Cpu, Server, Palette  } from "lucide-react";
import { Section } from "@/components/ui/section";
import { syne, outfit } from "@/lib/fonts";

export const TechStack = () => {
  const stacks = [
    { category: "Core", items: ["React", "Next.js", "TypeScript", "Node.js"], icon: <Cpu size={24} className="text-[#d9f99d]" /> },
    { category: "Style", items: ["Tailwind", "GSAP", "Framer Motion", "ShadCN UI"], icon: <Palette size={24} className="text-[#d9f99d]" /> },
    { category: "Backend", items: ["Node.js", "Firebase", "MongoDB", "Rest APIs"], icon: <Server size={24} className="text-[#d9f99d]" /> },
  ];

  return (
    <Section className="bg-[#0a0a0a] text-[#e5e5e5]">
      <h2 className={`${syne.className} text-6xl md:text-8xl font-bold mb-24 opacity-20`}>ARSENAL</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#333] border border-[#333]">
        {stacks.map((stack, i) => (
          <div key={i} className="group relative bg-[#0a0a0a] p-8 h-80 md:h-100 lg:h-80 flex flex-col justify-between hover:bg-[#111] transition-colors duration-500">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* <Cpu size={24} className="text-[#d9f99d]" /> */}
              {stack.icon}
            </div>
            
            <h3 className={`${syne.className} text-xl md:text-2xl lg:text-xl uppercase tracking-widest text-neutral-500`}>0{i + 1} // {stack.category}</h3>
            
            <ul className="space-y-2 md:space-y-3.5 lg:space-y-2">
              {stack.items.map((tech) => (
                <li key={tech} className={`${outfit.className} text-3xl md:text-5xl lg:text-4xl font-light hover:text-[#d9f99d] hover:translate-x-4 transition-all duration-300 cursor-pointer`}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};