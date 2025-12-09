import { Section } from "@/components/ui/section";
import { syne, outfit } from "@/lib/fonts";

export const About = () => {
  return (
    <Section className="bg-[#e5e5e5] text-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <span className="block w-3 h-3 bg-[#050505] mb-4" />
          <h2 className={`${syne.className} text-4xl md:text-5xl lg:text-4xl font-bold uppercase`}>
            Hi,<br/>I'm <span className="bg-[#d9f99d] px-2 text-[#050505] text-5xl md:text-6xl lg:text-5xl">Moyo</span>.<br/>
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8">
          <p className={`${outfit.className} text-2xl md:text-3xl font-light leading-snug`}>
            I don't just build websites; I turn ideas and designs into polished, functional digital experiences. With a focus on clean structure, 
            fluid interaction, and pixel-level accuracy, I build interfaces that feel <span className="bg-[#d9f99d] px-2 text-[#050505] font-medium">intentional, responsive, and reliable</span>.
          </p>

          <div className="flex gap-4 mt-8">
            {['Idea', 'Interface', 'Execution'].map((item) => (
              <div key={item} className="border border-[#050505] px-3 md:px-4 py-1.5 md:py-2 rounded-sm uppercase text-xs md:text-sm hover:bg-[#050505] hover:text-white transition-colors duration-300 cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};