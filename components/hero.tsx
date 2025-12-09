"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from 'lucide-react';
import { Section } from "@/components/ui/section";
import { syne } from "@/lib/fonts";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const year = new Date().getFullYear();
  
  return (
    <Section className="h-screen flex flex-col justify-center items-center bg-[#050505] text-[#e5e5e5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,249,157,0.05),transparent_50%)]" />
      
      <div className="z-10 flex flex-col items-center relative mix-blend-difference">
        <motion.h1 
          style={{ y: y1 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`${syne.className} text-[14vw] leading-[0.85] font-extrabold tracking-wider text-center uppercase`}
        >
          {/* Creative */}
          Web
        </motion.h1>
        
        <motion.h1 
          style={{ y: y2 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`${syne.className} text-[10vw] leading-[0.85] font-extrabold tracking-tighter text-center uppercase text-[#d9f99d] mix-blend-hard-light`}
        >
          Developer
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-9 md:bottom-12 left-0 w-full flex justify-between items-center px-1 md:px-12 uppercase text-[9px] md:text-xs tracking-widest text-neutral-500"
      >
        <a
            className="group flex items-center gap-0.5 md:gap-1.5 hover:underline underline-offset-4"
            href="/moyo-resume.pdf"
            download="moyo-resume.pdf"
        >
            Check me out 
            <Download 
            //  size={12}
             className="transition-transform duration-200 group-hover:translate-y-px w-3 md:w-3.5" 
            />
        </a>

        <span className="animate-pulse">Scroll to Explore</span>

        <span>{year} Edition</span>
      </motion.div>
    </Section>
  );
};